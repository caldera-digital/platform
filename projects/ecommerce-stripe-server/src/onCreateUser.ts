import * as admin from 'firebase-admin'
import { auth } from 'firebase-functions'

import { db } from './utils/store'

const splitName = (fullName: string | undefined): Array<string> => {
  if (!fullName) return ['', '']

  const splitName = fullName.split(/(\s+)/)
  const firstName = splitName[0] ? splitName[0] : ''
  const lastName = splitName[2] ? splitName[2] : ''

  return [firstName, lastName]
}

const createProfile = async (userRecord: any) => {
  const usersRef = db.collection('users').doc(userRecord.uid)
  const [firstName, lastName] = splitName(userRecord.displayName)

  try {
    await usersRef.set({
      cart: [],
      userId: userRecord.uid,
      joined: admin.firestore.FieldValue.serverTimestamp(),
      email: userRecord.email,
      displayName: userRecord.displayName,
      firstName,
      lastName,
      photoURL: userRecord.photoURL,
      phoneNumber: userRecord.phoneNumber,
    })
  } catch (error) {
    console.error('Add User to Firestore Failed:', error)
  }
}

export const createUser = auth.user().onCreate(createProfile)
