import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCPjzC7dxYtbXTtMr01JM9Cd_wRcrxmnwQ",
  authDomain: "proyecto-react-f3881.firebaseapp.com",
  projectId: "proyecto-react-f3881",
  storageBucket: "proyecto-react-f3881.appspot.com",
  messagingSenderId: "744569624303",
  appId: "1:744569624303:web:208ba1a21840c05e0ded1a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)