import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../Utils/firebase/firebaseUtils";

import SignUpForm from "../../Components/sign-up-form/sign-up-form";
import SignInForm from "../../Components/sign-in-form/sign-in-form";
const Authentication = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Sign In</h1>
      <button onClick={logGoogleUser}>Sign in with Google</button>

      <SignUpForm />
      <SignInForm />
    </div>
  );
};

export default Authentication;
