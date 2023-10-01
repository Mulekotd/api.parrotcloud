const admin = require('firebase-admin');
const serviceAccount = require('../serviceAccountKey.json');

const dotenv = require('dotenv');
dotenv.config();

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: process.env.FIREBASE_DATABASE_URL
});

module.exports = admin;