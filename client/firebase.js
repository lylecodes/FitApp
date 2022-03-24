import firebase from "firebase";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBRIZF0gZ5oirvJMtcPooYOMT0kf-POXWc",
  authDomain: "fitapp-d01cd.firebaseapp.com",
  projectId: "fitapp-d01cd",
  storageBucket: "fitapp-d01cd.appspot.com",
  messagingSenderId: "28883562820",
  appId: "1:28883562820:web:a394ba8738d92d12c3e711"
};

// Initialize Firebase
!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
const db = firebase.firestore();
export { firebase, db };
