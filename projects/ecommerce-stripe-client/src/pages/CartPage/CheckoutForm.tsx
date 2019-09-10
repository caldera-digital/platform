import { Button, message, Modal } from 'antd'
import React, { FC, useEffect, useState } from 'react'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import {
  CardElement,
  injectStripe,
  ReactStripeElements,
} from 'react-stripe-elements'
import { compose } from 'recompose'

import { Error } from '../../components'
import firebase from '../../config/firebase'
import { User } from '../../types'
import { getPurchaseByFirebaseID } from '../../utils/utilityService'

const db = firebase.firestore()

type P = RouteComponentProps &
  ReactStripeElements.InjectedStripeProps & {
    user: User
  }

type SubmitPayment = {
  stripe: ReactStripeElements.StripeProps
  user: User
  setProcessingPayment: (isProcessingPayment: boolean) => any
  setPaymentFirebaseID: (id: string) => any
}

// Place outside of render for easy unit testing
const submitPayment = async ({
  stripe,
  user,
  setProcessingPayment,
  setPaymentFirebaseID,
}: SubmitPayment) => {
  setProcessingPayment(true)

  const { token } = await stripe.createToken({ name: user.displayName })

  if (!token) {
    setProcessingPayment(false)
    return message.error(
      'Could not charge your payment. Are you sure the card number is correct?',
    )
  }

  try {
    const { id } = await db
      .collection('users')
      .doc(user.userId)
      .collection('payments')
      .add(token)

    setPaymentFirebaseID(id)
  } catch (error) {
    setProcessingPayment(false)
    message.error('Could not charge your payment. Please try again.')
  }

  console.log(token)
}

export const CheckoutFormComponent: FC<P> = ({ user, stripe, history }) => {
  const [isModalVisible, setModalVisible] = useState(false)
  const [isProcessingPayment, setProcessingPayment] = useState(false)
  const [paymentFirebaseID, setPaymentFirebaseID] = useState('')
  const { purchases } = user

  useEffect(() => {
    if (!paymentFirebaseID || !isProcessingPayment) return

    const completedPurchase = getPurchaseByFirebaseID(
      purchases,
      paymentFirebaseID,
    )

    if (completedPurchase) {
      message.success(
        `Your order has successfully been placed: ${completedPurchase.id}`,
      )

      history.push(`/thank-you/${completedPurchase.id}`)
    }
  })

  if (!stripe) return <Error />
  return (
    <div>
      <Button
        type="primary"
        disabled={user.cart.length === 0}
        onClick={() => setModalVisible(true)}
      >
        Checkout
      </Button>

      <Modal
        visible={isModalVisible}
        onOk={() =>
          submitPayment({
            stripe,
            user,
            setProcessingPayment,
            setPaymentFirebaseID,
          })
        }
        confirmLoading={isProcessingPayment}
        onCancel={() => setModalVisible(false)}
      >
        <h2>Purchase Order</h2>
        <p>
          Please input your credit card information for us to process your
          order.
        </p>
        <CardElement />
      </Modal>
    </div>
  )
}

export const CheckoutForm = compose<P, any>(
  withRouter,
  injectStripe,
)(CheckoutFormComponent)
