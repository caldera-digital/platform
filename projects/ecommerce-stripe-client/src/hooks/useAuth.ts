import { useEffect, useState } from 'react'

import firebase from '../config/firebase'
import { User } from '../types'

const db = firebase.firestore()

export interface AuthState {
  isAuthed: boolean
  loading: boolean
  user?: User
  logout?: () => void
}

export const defaultAuthState: AuthState = {
  isAuthed: false,
  loading: true,
}

export const useAuth = (): AuthState => {
  const [authState, setAuthState] = useState(defaultAuthState)

  useEffect(
    () =>
      firebase.auth().onAuthStateChanged(user => {
        if (user) {
          db.collection('users')
            .doc(user.uid)
            .onSnapshot(doc => {
              // https://github.com/googleapis/nodejs-firestore/issues/109
              // @ts-ignore
              const data: User = doc.data()

              setAuthState({ isAuthed: true, user: data, loading: false })
            })
        } else {
          setAuthState({ isAuthed: false, loading: false, user: undefined })
        }
      }),
    [],
  )

  /**
   * Why no setState here? Because the above effect subscription will fire and take care of everything for us.
   * Redirects will automatically be handle via PrivateRoute so that users aren't always redirected in case they're
   * on a public page.
   */
  const logout = (): Promise<void> => firebase.auth().signOut()

  return { ...authState, logout }
}
