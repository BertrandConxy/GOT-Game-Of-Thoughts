// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getAuth } from 'firebase/auth'
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCJUGIOah0xFCZ9YKDt03FP_3Wz2zRhxUE',
  authDomain: 'gameofthoughts-6fae7.firebaseapp.com',
  projectId: 'gameofthoughts-6fae7',
  storageBucket: 'gameofthoughts-6fae7.appspot.com',
  messagingSenderId: '1030605577018',
  appId: '1:1030605577018:web:1b697735cdd1acf17c0e03',
  measurementId: 'G-L0Y556F6KJ',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
