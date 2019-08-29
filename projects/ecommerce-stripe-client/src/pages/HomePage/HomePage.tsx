import { Icon, message } from 'antd'
import React, { FC } from 'react'
import { useCollectionData } from 'react-firebase-hooks/firestore'

import {
  Error,
  Loading,
  PageWrapper,
  PrivateRouteReturnComponentProps,
} from '../../components'
import { ProductList } from '../../components/productList'
import firebase from '../../config/firebase'
import { Product, ProductShort } from '../../types'
import { createShortProduct } from '../../utils/utilityService'

const db = firebase.firestore()

type P = PrivateRouteReturnComponentProps

export const HomePage: FC<P> = ({ user }) => {
  const [values, loading, error] = useCollectionData<Product>(
    db.collection('games').limit(30),
  )
  const userRef = db.collection('users').doc(user.userId)
  if (loading) return <Loading />
  if (error || !values) return <Error />

  return (
    <PageWrapper>
      <h1>Products</h1>

      <ProductList
        products={values}
        renderActions={product => {
          const isProductAlreadyAddedToCart: boolean =
            user.cart.length > 0
              ? !!user.cart.find(
                  (productShort: ProductShort) =>
                    productShort.id === product.id,
                )
              : false

          return [
            <Icon
              type={
                isProductAlreadyAddedToCart ? 'check-circle' : 'plus-circle'
              }
              key={'cart-action-1'}
              onClick={async () => {
                if (isProductAlreadyAddedToCart) {
                  return message.warning(
                    'You can only add one of each game to your cart.',
                  )
                }

                const cart = [...user.cart, createShortProduct(product)]

                try {
                  await userRef.update({ cart })
                  message.success('Add to cart success!')
                } catch (error) {
                  message.error('Add to cart error: Please try again.')
                }
              }}
            />,
          ]
        }}
      />
    </PageWrapper>
  )
}
