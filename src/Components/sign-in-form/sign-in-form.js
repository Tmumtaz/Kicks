import "./sign-in-form.styles.scss";
import Button from "../button/button";
import { useState, useContext } from "react";
import {
  signInAuthUserWithEmailAndPassword,
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../Utils/firebase/firebaseUtils";

import { UserContext } from "../../Contexts/user-context";
import { FcGoogle } from "react-icons/fc";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const { setCurrentUser } = useContext(UserContext);

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    setCurrentUser(user);
    await createUserDocumentFromAuth(user);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { user } = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      setCurrentUser(user);
      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("incorrect password for email");
          break;
        case "auth/user-not-found":
          alert("no user associated with this email");
          break;
        default:
          console.log(error);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="sign-up-container">
      <div className="header-container">
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          onChange={handleChange}
          name="email"
          value={email}
          placeholder="Email"
        />

        <input
          type="password"
          onChange={handleChange}
          name="password"
          value={password}
          placeholder="Password"
        />
        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button buttonType={'google'}  onClick={signInWithGoogle}>
            Google sign in
          </Button>
        </div>
      </form>

      
    </div>
  );
};

export default SignInForm;
