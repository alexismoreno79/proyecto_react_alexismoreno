import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAMXwJnVrIP-MKUG6I_S9T1vzZfmZIkRoc",
  authDomain: "backend34695.firebaseapp.com",
  projectId: "backend34695",
  storageBucket: "backend34695.appspot.com",
  messagingSenderId: "25305929856",
  appId: "1:25305929856:web:d0e6c8aa29ea7e1d58ae65"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)