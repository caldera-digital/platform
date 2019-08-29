/* eslint-disable import/no-commonjs */
const {
  FIREBASE_CONFIG,
  GAMES,
} = require('@caldera-digital/ecommerce-stripe-shared')
// eslint-disable-next-line import/no-extraneous-dependencies
const firestoreService = require('firestore-export-import')
const serviceAccount = require('./service-account-key.json')

/**
 * Firestore expects a particular format in order for it to seed correctly and be queryable by id.
 * Here, we prep all the fixture data so it can go into the DB.
 *
 * If you need to delete the collections, you have to do that from the Firebase console for now.
 */
const data = {
  products: {},
}

GAMES.forEach(game => {
  data.products[game.id] = game
})

// JSON To Firestore
const jsonToFirestore = async () => {
  console.warn(
    'This does not truncate existing data! You need to use the console for that because Firebase does not have an easy helper.',
  )

  try {
    console.log('Initialzing Firebase')
    await firestoreService.initializeApp(
      serviceAccount,
      FIREBASE_CONFIG.databaseURL,
    )
    console.log('Firebase Initialized')

    await firestoreService.restore(data)
    console.log('Upload Success')
  } catch (error) {
    console.log(error)
  }
}

jsonToFirestore()
