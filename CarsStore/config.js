import Firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBUX3ZsVfcN5bqnoh7n1x4Pk67ap-ZqrDI",
  authDomain: "carsstore-c3aab.firebaseapp.com",
  databaseURL: "https://carsstore-c3aab.firebaseio.com",
  projectId: "carsstore-c3aab",
  storageBucket: "carsstore-c3aab.appspot.com",
  messagingSenderId: "85669954223",
  appId: "1:85669954223:web:86c7fa8508eeb2bc5d0a5a",
  measurementId: "G-MQCC543LHQ"
};

const app= Firebase.initializeApp(firebaseConfig);

export const firebaseFeatures = {
  dp: app.database(),
  auth: app.auth(),
  storage: app.storage(),
  fireStore: app.firestore()
}