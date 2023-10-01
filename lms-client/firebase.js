
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCi6Eb4QWwZyDB04jkCEPv_Q4cosBT0rF0",
  authDomain: "mwacademy-edadb.firebaseapp.com",
  projectId: "mwacademy-edadb",
  storageBucket: "mwacademy-edadb.appspot.com",
  messagingSenderId: "971035475292",
  appId: "1:971035475292:web:f7c6294bcdcf29c08a9599",
  measurementId: "G-49YS42JNYL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);