// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBS5dKAZwdSIGjXi0diEJq90THbqHtxNew',
  authDomain: 'jcwdol021.firebaseapp.com',
  projectId: 'jcwdol021',
  storageBucket: 'jcwdol021.firebasestorage.app',
  messagingSenderId: '899062997418',
  appId: '1:899062997418:web:3c64b8bfaacfd74c1e4bd3',
  measurementId: 'G-6XE37Q5QCR',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)