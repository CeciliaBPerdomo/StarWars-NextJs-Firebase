// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage" // Guarda las imagenes
//import { getAuth, GoogleAuthProvider } from "firebase/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.apiKey  || "AIzaSyCMc6rx_XhPu-HJP2lvSUsgaM48KeirThs",
  authDomain: process.env.authDomain || "starwars-5be9c.firebaseapp.com",
  projectId: process.env.projectId || "starwars-5be9c",
  storageBucket: process.env.storageBucket || "starwars-5be9c.appspot.com" ,
  messagingSenderId: process.env.messagingSenderId || "424895495742",
  appId: process.env.appId || "1:424895495742:web:e202705c059c20c2a3db6f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const storage = getStorage(app)
// export const auth = getAuth(app)
// export const provider = new GoogleAuthProvider()