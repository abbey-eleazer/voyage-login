import { createUserWithEmailAndPassword,signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "@/firebase/firebase";
import { defineStore } from "pinia";


export const useAuthStore = defineStore("authStore", () => {
 const registerUser = (credentials) => {
    createUserWithEmailAndPassword(auth, credentials.email, credentials.password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log("User registered:", user);
      })
      .catch((error) => {
        console.error("Error registering user:", error);
      });
 }

 const loginUser = (credentials) => {
    signInWithEmailAndPassword(auth, credentials.email, credentials.password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log("User logged in:", user);
      })
      .catch((error) => {
        console.error("Error logging in user:", error);
      });
 }


 const logoutUser = () => {
    signOut(auth).then(() => {
      console.log("User logged out");
    }).catch((error) => {
      console.error("Error logging out user:", error);
    });
 }
 return { registerUser, loginUser, logoutUser }
});