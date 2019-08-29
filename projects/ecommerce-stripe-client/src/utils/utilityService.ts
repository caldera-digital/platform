import { omit } from 'lodash/fp'

import { Product, ProductShort } from '../types'

export const createShortProduct = (
  product: Product | ProductShort,
): ProductShort =>
  // @ts-ignore
  omit(['quantity', 'quantity_sold', 'received_by'])(product)
