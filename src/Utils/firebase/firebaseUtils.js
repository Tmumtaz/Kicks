import { initializeApp } from 'firebase/app'
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAts3OhnQWJrNBm20nuHEz2MGULh7tuxHM",
    authDomain: "kicks-bc8b3.firebaseapp.com",
    projectId: "kicks-bc8b3",
    storageBucket: "kicks-bc8b3.appspot.com",
    messagingSenderId: "833223958829",
    appId: "1:833223958829:web:63beebc3e7e6996370b3a4"
  };

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

// forces the user to select account whenever they interact with provider 
provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);