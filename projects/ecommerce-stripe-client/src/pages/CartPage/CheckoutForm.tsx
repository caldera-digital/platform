import { Button, Modal } from 'antd'
import React, { FC } from 'react'
import { withRouter } from 'react-router-dom'
import {
  CardElement,
  injectStripe,
  ReactStripeElements,
} from 'react-stripe-elements'
import { compose } from 'recompose'

import { Error } from '../../components'
import { User } from '../../types'

type P = ReactStripeElements.InjectedStripeProps & {
  user: User
}

type SubmitPayment = {
  stripe: ReactStripeElements.StripeProps
  user: User
}

// Place outside of render for easy unit testing
const submitPayment = async ({ stripe }: SubmitPayment) => {
  console.log(stripe)
}

export const CheckoutFormComponent: FC<P> = ({ user, stripe }) => {
  const [isModalVisible, setModalVisible] = React.useState(false)

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
        onOk={() => submitPayment({ stripe, user })}
        confirmLoading={false}
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
