import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyABw7zTT2lDYiS7UyPsl0OwqzxfmXeVGxY",
    authDomain: "info-hub-2c97d.firebaseapp.com",
    projectId: "info-hub-2c97d",
    storageBucket: "info-hub-2c97d.appspot.com",
    messagingSenderId: "69662163414",
    appId: "1:69662163414:web:4a0137928b56614d94e477",
    measurementId: "G-X8XX4W8SS8"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const db = firebaseApp.firestore();

export { auth, provider };
export default db;