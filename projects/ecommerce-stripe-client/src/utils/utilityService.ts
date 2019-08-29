import { omit } from 'lodash/fp'

import { Product, ProductShort } from '../types'

export const createShortProduct = (
  product: Product | ProductShort,
): ProductShort =>
  // @ts-ignore
  omit(['quantity', 'quantity_sold', 'received_by'])(product)

export const getPurchaseByFirebaseID = (purchases: [any], id: string) =>
  purchases.find(purchase => purchase.id === id)
