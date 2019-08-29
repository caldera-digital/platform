import React, { FC } from 'react'
import { useCollection } from 'react-firebase-hooks/firestore'

import { PageWrapper, PrivateRouteReturnComponentProps } from '../../components'
import firebase from '../../config/firebase'

const db = firebase.firestore()

type P = PrivateRouteReturnComponentProps

export const HomePage: FC<P> = ({ user }) => {
  const [snapshot, loading, error] = useCollection(
    db.collection('games').limit(30),
  )

  console.log(loading, error, snapshot)

  return <PageWrapper>home page</PageWrapper>
}
