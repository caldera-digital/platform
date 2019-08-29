/**
 * If you have multiple environments, you'd bootstrap them here. One way to do is add REACT_APP_ENV=prod to
 * an NPM script and check it here.
 */
import 'firebase/auth'
import 'firebase/database'

import { FIREBASE_CONFIG } from '@caldera-digital/ecommerce-stripe-shared'
import firebase from 'firebase/app'

const config = FIREBASE_CONFIG

firebase.initializeApp(config)
export default firebase
