import React, { FC, useContext } from 'react'
import { Redirect, Route, RouteProps } from 'react-router-dom'

import { AuthContext } from '../context/AuthContext'
import { User } from '../types'
import { Loading } from './loading'

export type PrivateRouteReturnComponentProps = RouteProps & {
  user: User
}

type PrivateRouteProps = {
  component: FC<PrivateRouteReturnComponentProps>
}
type P = PrivateRouteProps & RouteProps

export const PrivateRoute: FC<P> = ({ component: Component, ...rest }: P) => {
  const { isAuthed, user, loading } = useContext(AuthContext)

  // Firebase auth is async!
  if (loading) return <Loading />

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
