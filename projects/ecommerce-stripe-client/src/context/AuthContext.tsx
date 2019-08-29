import React, { FC } from 'react'

import { AuthState, defaultAuthState, useAuth } from '../hooks/useAuth'

export const AuthContext = React.createContext<AuthState>(defaultAuthState)

export const AuthProvider: FC = ({ children }) => {
  const authState = useAuth()

  return (
    <AuthContext.Provider value={authState}>{children}</AuthContext.Provider>
  )
}

export const AuthConsumer = AuthContext.Consumer
