import "./sign-in-form.styles.scss";
import Button from "../button/button";
import { useState, useContext } from "react";
import {
  signInAuthUserWithEmailAndPassword,
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../Utils/firebase/firebaseUtils";

import { UserContext } from "../../Contexts/user-context";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const {setCurrentUser } = useContext(UserContext)

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const {user} = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      setCurrentUser(user)
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
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <input
          label="Email"
          type="email"
          onChange={handleChange}
          name="email"
          value={email}
        />

        <input
          label="Password"
          type="password"
          onChange={handleChange}
          name="password"
          value={password}
        />
        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <button onClick={signInWithGoogle}>Sign in with Google</button>
        </div>
      </form>
      

      {/* <Button  onClick={signInWithGoogle}>
            Google sign in
          </Button> */}
    </div>
  );
};

export default SignInForm;