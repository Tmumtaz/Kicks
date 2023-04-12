import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../Utils/firebase/firebaseUtils";

import "./authentication.styles.scss";

import SignUpForm from "../../Components/sign-up-form/sign-up-form";
import SignInForm from "../../Components/sign-in-form/sign-in-form";
const Authentication = () => {
 
  return (
    <div className="authentication-container">
      <div className="form-container">
        <SignUpForm />
      </div>
      <div className="form-container">
        <SignInForm />
      </div>
    </div>
  );
};

export default Authentication;
