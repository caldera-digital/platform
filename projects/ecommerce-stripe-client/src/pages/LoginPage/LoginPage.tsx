import * as firebaseui from 'firebaseui'
import React from 'react'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'

import { PageWrapper } from '../../components'
import firebase from '../../config/firebase'
import { APP_NAME } from '../../utils/const'

// Configure FirebaseUI.
const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: 'popup',
  // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
  signInSuccessUrl: '/',
  credentialHelper: firebaseui.auth.CredentialHelper.NONE,
  signInOptions: [firebase.auth.EmailAuthProvider.PROVIDER_ID],
}

export const LoginPage: React.FC = () => {
  return (
    <PageWrapper showNav={false}>
      <h1 style={{ textAlign: 'center', marginBottom: '3rem' }}>{APP_NAME}</h1>
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
    </PageWrapper>
  )
}
