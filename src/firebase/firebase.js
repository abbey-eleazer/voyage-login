// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import  "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCWYXMupIP_Y01aRVVLfNoVXpR_Yy5EIp0",
  authDomain: "voyage-30d92.firebaseapp.com",
  projectId: "voyage-30d92",
  storageBucket: "voyage-30d92.firebasestorage.app",
  messagingSenderId: "68383516422",
  appId: "1:68383516422:web:94e33b4ad3af065294e087"
};

const fireapp = initializeApp(firebaseConfig);
const auth = getAuth(fireapp);
const db = getFirestore(fireapp);
export { auth, db, fireapp };