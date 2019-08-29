import { User } from 'firebase'
import { useEffect, useState } from 'react'

import firebase from '../config/firebase'

export interface AuthState {
  isAuthed: boolean
  loading: boolean
  user?: User
}

export const defaultAuthState: AuthState = {
  isAuthed: false,
  loading: true,
}

export const useAuth = (): AuthState => {
  const [authState, setAuthState] = useState(defaultAuthState)

  useEffect(
    () =>
      firebase.auth().onAuthStateChanged(async user => {
        if (user) {
          setAuthState({ isAuthed: true, user, loading: false })
        } else {
          setAuthState({ isAuthed: false, loading: false })
        }
      }),
    [],
  )

  return authState
}
