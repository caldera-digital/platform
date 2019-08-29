import * as firebaseui from 'firebaseui'
import React from 'react'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'

import { PageWrapper } from '../../components'
import firebase from '../../config/firebase'

// Configure FirebaseUI.
const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: 'popup',
  // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
  signInSuccessUrl: '/',
  credentialHelper: firebaseui.auth.CredentialHelper.NONE,
  // We will display Google and Facebook as auth providers.
  signInOptions: [
    // {
    //   provider: firebase.auth.PhoneAuthProvider.PROVIDER_ID,
    //   recaptchaParameters: {
    //     type: 'image', // 'audio'
    //     size: 'invisible', // 'invisible' or 'compact'
    //     badge: 'bottomleft', //' bottomright' or 'inline' applies to invisible.
    //   },
    // },
    // firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    // firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
  ],
}

export const LoginPage: React.FC = () => {
  return (
    <PageWrapper showNav={false}>
      <h1 style={{ textAlign: 'center', marginBottom: '3rem' }}>
        Ecommerce Test App
      </h1>
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
    </PageWrapper>
  )
}
