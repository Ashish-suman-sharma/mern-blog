// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  // apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  apiKey: "AIzaSyDHcK5NiavSPdFINivFREAZugYTjd7l_Jg",
  authDomain: 'ashish1-72e18.firebaseapp.com',
  projectId: 'ashish1-72e18',
  storageBucket: 'ashish1-72e18.appspot.com',
  messagingSenderId: '210685802006',
  appId: '1:210685802006:web:7b10e34af6234701576737',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
