import React, { FC, useContext } from 'react'
import { Redirect, Route, RouteProps } from 'react-router-dom'

import { AuthContext } from '../context/AuthContext'

export type PrivateRouteReturnComponentProps = RouteProps & {
  user: any
}

type PrivateRouteProps = {
  component: FC<PrivateRouteReturnComponentProps>
}
type P = PrivateRouteProps & RouteProps

export const PrivateRoute: FC<P> = ({ component: Component, ...rest }: P) => {
  const { isAuthed, user } = useContext(AuthContext)

  return (
    <Route
      {...rest}
      // https://github.com/DefinitelyTyped/DefinitelyTyped/issues/27805
      render={(props): any =>
        isAuthed && user ? (
          <Component user={user} {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: props.location },
            }}
          />
        )
      }
    />
  )
}
