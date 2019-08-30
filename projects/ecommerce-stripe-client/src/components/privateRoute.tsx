import React, { FC, useContext } from 'react'
import { useDocumentData } from 'react-firebase-hooks/firestore'
import { Redirect, Route, RouteProps } from 'react-router-dom'

import firebase from '../config/firebase'
import { AuthContext } from '../context/AuthContext'
import { User } from '../types'
import { Error } from './error'
import { Loading } from './loading'

const db = firebase.firestore()

export type PrivateRouteReturnComponentProps = RouteProps & {
  user: User
}

type PrivateRouteProps = {
  component: FC<PrivateRouteReturnComponentProps>
}
type P = PrivateRouteProps & RouteProps | any

/**
 * Why here?
 *
 * Because the cloud functions take time to heat up on a cold start and putting it in the auth context could result in a user
 * being redirected and kicked back to login because the document in the DB isn't ready to be queried
 */
const RenderAuthedComponent: FC<P> = ({
  component: Component,
  user: authedUserRecord,
  ...rest
}) => {
  const [user, loading, error] = useDocumentData<User>(
    db.collection('users').doc(authedUserRecord.uid),
  )
  if (loading || !user) return <Loading />
  if (error) return <Error />

  return <Component user={user} {...rest} />
}

export const PrivateRoute: FC<P> = ({
  component: requestedComponent,
  ...rest
}: P) => {
  const { isAuthed, user, loading } = useContext(AuthContext)

  // Firebase auth is async!
  if (loading) return <Loading />

  return (
    <Route
      {...rest}
      // https://github.com/DefinitelyTyped/DefinitelyTyped/issues/27805
      render={(props): any =>
        isAuthed && user ? (
          <RenderAuthedComponent
            component={requestedComponent}
            user={user}
            {...props}
          />
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
