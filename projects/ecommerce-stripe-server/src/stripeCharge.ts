import { config, firestore } from 'firebase-functions'

import { db } from './utils/store'

const stripe = require('stripe')(config().stripe.testsecret)

// Should go to shared
const calcTotal = (cart = []) =>
  // @ts-ignore
  cart.reduce((accu, item) => accu + item.price, 0) * 100

const stripeChargeHandler = async (snap: any, { params }: any) => {
  const payment = snap.data()
  const userId = params.userId
  const paymentId = params.paymentId

  // Return early if there's no payment or there's already a charge
  if (!payment || payment.charge) return

  // Grab the user from the user collection
  const userSnap = await db
    .collection('users')
    .doc(userId)
    .get()
  const user = userSnap.data()

  if (!user) return console.error('Cannot find user!')
  const itemsInCart = user.cart.length

  if (itemsInCart === 0) {
    return console.error('Cannot charge a customer that has no items in cart!')
  }

  // Build the payment object
  try {
    const userRef = db.collection('users').doc(userId)

    let stripeCustomerID = ''
    if (!user.stripeCustomerID) {
      // TODO: Fire off events here like analytics or other tracking
      console.log('New customer, creating in Stripe...')
      const { id } = await stripe.customers.create({
        description: `Customer for ${user.firstName} ${user.lastName} (${
          user.userId
        })`,
        source: payment.id,
      })

      stripeCustomerID = id
    } else {
      stripeCustomerID = user.stripeCustomerID
    }

    const chargeData = await stripe.charges.create(
      {
        amount: calcTotal(user.cart),
        currency: 'usd',
        description: 'A product purchase',
        customer: stripeCustomerID,
      },
      { idempotency_key: paymentId },
    )

    const { data: stripeChargeData } = await stripe.charges.list({
      customer: stripeCustomerID,
    })

    // TODO: This should be a transaction in a production app
    await userRef
      .collection('payments')
      .doc(paymentId)
      .update({
        chargeData,
      })

    await userRef.set(
      {
        cart: [], // Empty their cart
        stripeCharges: stripeChargeData,
        stripeCustomerID,
        purchases: [
          ...user.purchases,
          {
            items: user.cart,
            id: paymentId,
          },
        ], // Save ref on user object to lookup details later if needed
      },
      { merge: true },
    )
  } catch (error) {
    console.error('Charge payment failed:', error)
  }
}

export const stripeCharge = firestore
  .document('users/{userId}/payments/{paymentId}')
  .onCreate(stripeChargeHandler)
