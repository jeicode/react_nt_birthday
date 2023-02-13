// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
const projectId = 'react-nt-birthday-8a9da'
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDZIhqZoTbww3PCLYTMHRWuUIWbKlFSOFs",
    authDomain: `${projectId}.firebaseapp.com`,
    projectId,
    storageBucket: `${projectId}.appspot.com`,
    messagingSenderId: "706899042434",
    appId: "1:706899042434:web:f396beefe447d9a2e7549b"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth(firebaseApp)
const db = getFirestore(firebaseApp )

export default firebaseApp
export { auth, db }

