import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
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

const provider = new GoogleAuthProvider();

// forces the user to select account whenever they interact with provider
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

//take data from authentication and store in firestore
export const createUserDocumentFromAuth = async (userAuth) => {
  // check for existing user reference
  const userDocRef = doc(db, "users", userAuth.uid); // userAuth.uid - unique identifier generated with each user through authentication service

  console.log(userDocRef);
  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot.exists());

  //Check if user data exists if !user - set the document with data from userAuth in collection
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log("error creating the user:", error.message);
    }
  }
  // user data exists: return back userDocRef
  return userDocRef;
};
