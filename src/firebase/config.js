// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
const projectId = 'react-nt-birthday'
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAGCq8p4ih3CboyyuZnazae1fCnCdU7Ons",
    authDomain: `${projectId}.firebaseapp.com`,
    projectId,
    storageBucket: `${projectId}.appspot.com`,
    messagingSenderId: "426055258850",
    appId: "1:426055258850:web:0afc7e024e405693fa84bb"
};

// Initialize Firebase
export default initializeApp(firebaseConfig);

