import { Button, Icon, message } from 'antd'
import React, { FC } from 'react'

import { PageWrapper, PrivateRouteReturnComponentProps } from '../../components'
import { ProductList } from '../../components/productList'
import firebase from '../../config/firebase'
import { ProductShort } from '../../types'

const db = firebase.firestore()

type P = PrivateRouteReturnComponentProps

export const CartPage: FC<P> = ({ user }) => {
  const userRef = db.collection('users').doc(user.userId)

  return (
    <PageWrapper>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <h1>Cart</h1>
        <Button type="primary" disabled={user.cart.length === 0}>
          Checkout
        </Button>
      </div>
      <ProductList
        products={user.cart}
        emptyText="No products to display. Add items to your cart to enable checkout!"
        renderActions={product => [
          <Icon
            type="minus-circle"
            key="minus-circle"
            onClick={async () => {
              const cart = user.cart.filter(
                (p: ProductShort) => p.id !== product.id,
              )

              try {
                await userRef.update({ cart })
                message.success('Item removed from cart!')
              } catch (error) {
                message.error('Remove from cart error: Please try again.')
              }
            }}
          />,
        ]}
      />
    </PageWrapper>
  )
}
