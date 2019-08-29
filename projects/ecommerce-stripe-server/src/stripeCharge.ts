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
    const chargeData = await stripe.charges.create(
      {
        amount: calcTotal(user.cart),
        currency: 'usd',
        description: 'A product purchase',
        source: payment.id,
      },
      { idempotency_key: paymentId },
    )

    // This should be a transaction in a production app
    await userRef
      .collection('payments')
      .doc(paymentId)
      .update({
        chargeData,
      })

    await userRef.update({
      cart: [], // Empty their cart
      purchases: [
        ...user.purchases,
        {
          items: user.cart,
          id: paymentId,
        },
      ], // Save ref on user object to lookup details later if needed
    })
  } catch (error) {
    console.error('Charge payment failed:', error)
  }
}

export const stripeCharge = firestore
  .document('users/{userId}/payments/{paymentId}')
  .onCreate(stripeChargeHandler)
