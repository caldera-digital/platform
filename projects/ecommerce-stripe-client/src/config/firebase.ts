/**
 * If you have multiple environments, you'd bootstrap them here. One way to do is add REACT_APP_ENV=prod to
 * an NPM script and check it here.
 */
import 'firebase/auth'
import 'firebase/database'

import firebase from 'firebase/app'

const config = {
  apiKey: 'AIzaSyDmFQQS4KgiCGsNiXumO3JpcRgwe-8OiWA',
  authDomain: 'ecommerce-stripe-example.firebaseapp.com',
  databaseURL: 'https://ecommerce-stripe-example.firebaseio.com',
  projectId: 'ecommerce-stripe-example',
  storageBucket: '',
  messagingSenderId: '598364109281',
  appId: '1:598364109281:web:e67274c78fee5e29',
}

firebase.initializeApp(config)
export default firebase
