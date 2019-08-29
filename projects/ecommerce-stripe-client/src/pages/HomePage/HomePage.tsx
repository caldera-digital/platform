import React, { FC } from 'react'

import { PrivateRouteReturnComponentProps } from '../../components/privateRoute'

type P = PrivateRouteReturnComponentProps

export const HomePage: FC<P> = ({ user }) => {
  return <div>home page</div>
}
