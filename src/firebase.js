import * as firebase from "firebase";
import "firebase/firestore";

firebase.initializeApp({
  apiKey: "AIzaSyBTbSZJEOpgANuU1wU9oEtlSlJOLSdqHus",
  authDomain: "events-32526.firebaseapp.com",
  databaseURL: "https://events-32526.firebaseio.com",
  projectId: "events-32526",
  storageBucket: "events-32526.appspot.com",
  messagingSenderId: "951505467479"
});

export default firebase;
export const db = firebase.firestore();
export const auth = firebase.auth();
