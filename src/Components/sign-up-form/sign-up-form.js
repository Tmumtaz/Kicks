import { useContext, useState } from "react";
import "./sign-up.styles.scss";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../Utils/firebase/firebaseUtils";
import Button from "../button/button";
import { UserContext } from "../../Contexts/user-context";

// set object to generisize the handle change function
const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  // destructure form field values
  const { displayName, email, password, confirmPassword } = formFields;

  const { setCurrentUser } = useContext(UserContext);

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    //spread all the form fields an update the appropriate value
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      setCurrentUser(user);
      // set the display name on user doc
      await createUserDocumentFromAuth(user, { displayName });
      resetFormFields();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Account Already Exists");
      } else {
        console.log("user creation encountered an error:", error.message);
      }
    }
  };

  return (
    <div className="sign-up-container">
      <h2>Dont have an account?</h2>
      <span>Sign up with your email and password</span>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          required
          value={displayName}
          onChange={handleChange}
          name="displayName"
          placeholder="Display Name"
        />

        <input
          type="email"
          required
          value={email}
          onChange={handleChange}
          name="email"
          placeholder="Email"
        />

        <input
          type="password"
          required
          value={password}
          onChange={handleChange}
          name="password"
          placeholder="Password"
        />
        <input
          type="password"
          required
          value={confirmPassword}
          onChange={handleChange}
          name="confirmPassword"
          placeholder="Confirm Password"
        />
        <div className="buttons-container">
          <Button type="submit">Sign Up</Button>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
