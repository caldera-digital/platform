import { round, sortBy } from 'lodash'
import React, { FC } from 'react'
import { RouteComponentProps } from 'react-router-dom'

import { PageWrapper, PrivateRouteReturnComponentProps } from '../../components'
import { ProductList } from '../../components/productList'
import { getPurchaseByFirebaseID } from '../../utils/utilityService'

type P = PrivateRouteReturnComponentProps & RouteComponentProps

// Need test! Add a helper like this to the Stripe elements library?
const prettyStripeAmount = (amount: number) => {
  return round(amount / 100, 2).toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  })
}

export const ThankYouPage: FC<P> = ({
  user: { purchases, firstName, stripeCharges, stripeCustomerID },

  match: {
    // @ts-ignore
    params: { orderID },
  },
}) => {
  const purchase = getPurchaseByFirebaseID(purchases, orderID)
  // Make sure it's sorted by most recent charge
  const [mostRecentCharge, ...previousCharges] = sortBy(
    stripeCharges,
    'created',
  ).reverse()

  return (
    <PageWrapper>
      <h1>Thank You, {firstName}!</h1>
      <p>Your order number is: {mostRecentCharge.id}</p>
      <p>Customer number: {stripeCustomerID}</p>
      <p>Total amount charged: {prettyStripeAmount(mostRecentCharge.amount)}</p>

      <h2>Your Items</h2>
      <ProductList products={purchase.items} />

      {previousCharges && previousCharges.length > 0 && (
        <>
          <h2>Charges History</h2>
          {previousCharges.map(charge => (
            <p>
              {new Date(charge.created * 1000).toLocaleDateString('en-US')}{' '}
              {charge.id} {prettyStripeAmount(charge.amount)}
            </p>
          ))}
        </>
      )}
    </PageWrapper>
  )
}
