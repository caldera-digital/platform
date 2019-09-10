import * as admin from 'firebase-admin'
import { auth } from 'firebase-functions'
import { UserRecord } from 'firebase-functions/lib/providers/auth'
import { getOr } from 'lodash/fp'

import { db } from './utils/store'

const splitName = (fullName: string | undefined): Array<string> => {
  if (!fullName) return ['', '']

  const splitName = fullName.split(/(\s+)/)
  const firstName = splitName[0] ? splitName[0] : ''
  const lastName = splitName[2] ? splitName[2] : ''

  return [firstName, lastName]
}

const createProfile = async ({ uid }: UserRecord) => {
  const usersRef = db.collection('users').doc(uid)

  try {
    // Need to make another round trip so we can get the user's name and other information
    const authedUserRecord = await admin.auth().getUser(uid)
    const [firstName, lastName] = splitName(authedUserRecord.displayName)

    await usersRef.set({
      cart: [],
      purchases: [],
      stripeCustomerID: '',
      stripeCharges: [],
      userId: authedUserRecord.uid,
      joined: admin.firestore.FieldValue.serverTimestamp(),
      email: authedUserRecord.email,
      displayName: getOr('', 'displayName', authedUserRecord),
      firstName,
      lastName,
      // Potentially come in depending on sign in provider
      photoURL: getOr('', 'photoURL', authedUserRecord),
      phoneNumber: getOr('', 'phoneNumber', authedUserRecord),
    })
  } catch (error) {
    console.error('Add User to Firestore Failed:', error)
  }
}

// This is called when the user is authed NOT when all of the user's info is stored in the Auth side of Firebase
// https://stackoverflow.com/questions/43223896/user-displayname-is-undefined-in-oncreate-trigger-for-email-sign-up-method
export const createUser = auth.user().onCreate(createProfile)
