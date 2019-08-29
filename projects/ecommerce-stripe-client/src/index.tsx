// Replace this line with polyfills import for browser support
import 'normalize.css'

import { GlobalStyle } from '@caldera-digital/theme'
import React from 'react'
import ReactDOM from 'react-dom'
import { StripeProvider } from 'react-stripe-elements'
import { ThemeProvider } from 'styled-components'

import App from './App'
import { AuthProvider } from './context/AuthContext'
import * as serviceWorker from './serviceWorker'
import { THEME } from './utils/theme'

ReactDOM.render(
  <AuthProvider>
    {/* This is the test apiKey! */}
    <ThemeProvider theme={THEME}>
      <StripeProvider apiKey="pk_test_UAZRjNIu7TRnDkjCLMpIEAlf">
        <>
          <GlobalStyle />
          <App />
        </>
      </StripeProvider>
    </ThemeProvider>
  </AuthProvider>,
  document.getElementById('root'),
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
