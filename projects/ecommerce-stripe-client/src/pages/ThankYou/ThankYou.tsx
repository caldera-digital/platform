import React, { FC } from 'react'
import { RouteComponentProps } from 'react-router-dom'

import { PageWrapper, PrivateRouteReturnComponentProps } from '../../components'
import { ProductList } from '../../components/productList'
import { getPurchaseByFirebaseID } from '../../utils/utilityService'

type P = PrivateRouteReturnComponentProps & RouteComponentProps

export const ThankYouPage: FC<P> = ({
  user: { purchases, firstName },
  match: {
    // @ts-ignore
    params: { orderID },
  },
}) => {
  const purchase = getPurchaseByFirebaseID(purchases, orderID)
  return (
    <PageWrapper>
      <h1>Thank You, {firstName}!</h1>
      <p>Your order number is: {purchase.id}</p>

      <h2>Your Items</h2>
      <ProductList products={purchase.items} />
    </PageWrapper>
  )
}
