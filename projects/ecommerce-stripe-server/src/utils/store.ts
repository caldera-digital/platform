import * as admin from 'firebase-admin'
import { config } from 'firebase-functions'

admin.initializeApp(config().firebase)

export const db = admin.firestore()
export const auth = admin.auth()
