import firebase from "firebase/compat/app";
import 'firebase/compat/storage'
import "firebase/compat/auth";

export const app = firebase.initializeApp({
  apiKey:"AIzaSyClPo4vll-zFIWu1QmTMZwhBa8WkMHq14E",
  authDomain: "netflix-clone-e6dad.firebaseapp.com",
  projectId: "netflix-clone-e6dad",
  messagingSenderId: "728858555050",
  appId: "1:728858555050:web:ae302c21c589f47a9fd6d3",
  measurementId: "G-47EN6V3SSZ",
  databaseURL: "gs://netflix-clone-e6dad.appspot.com",
  storageBucket: "netflix-clone-e6dad.appspot.com",
});
export const auth = app.auth();
export const storage = firebase.storage()



