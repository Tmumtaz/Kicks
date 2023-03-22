import { resultKeyNameFromField } from "@apollo/client/utilities";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAts3OhnQWJrNBm20nuHEz2MGULh7tuxHM",
  authDomain: "kicks-bc8b3.firebaseapp.com",
  projectId: "kicks-bc8b3",
  storageBucket: "kicks-bc8b3.appspot.com",
  messagingSenderId: "833223958829",
  appId: "1:833223958829:web:63beebc3e7e6996370b3a4",
};

const firebaseApp = initializeApp(firebaseConfig);

const goolgeProvider = new GoogleAuthProvider();

// forces the user to select account whenever they interact with provider
goolgeProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, goolgeProvider);
export const db = getFirestore();

export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInfo = {}
) => {
  if (!userAuth) return;
  // check for existing user reference
  const userDocRef = doc(db, "users", userAuth.uid); // userAuth.uid - unique identifier generated with each user through authentication service

  const userSnapshot = await getDoc(userDocRef);

  //Check if user data exists if !user
  if (!userSnapshot.exists()) {
    // if user snapshots doesnt exist, set it with userAuth object
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInfo,
      });
    } catch (error) {
      console.log("error creating the user:", error.message);
    }
  }
  // user data exists: return back userDocRef
  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};


export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};