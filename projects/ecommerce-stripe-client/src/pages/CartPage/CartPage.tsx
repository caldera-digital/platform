import React, { FC } from 'react'

import { PageWrapper, PrivateRouteReturnComponentProps } from '../../components'

type P = PrivateRouteReturnComponentProps

export const CartPage: FC<P> = ({ user }) => {
  return <PageWrapper>cart page</PageWrapper>
}
