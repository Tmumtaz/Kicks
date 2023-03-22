import { useState } from "react";
import "./sign-up.styles.scss";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../Utils/firebase/firebaseUtils";


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
    <div>
      <h1>Sign up with your email and password</h1>
      <div>
      <form onSubmit={handleSubmit}>
        <label>Display Name</label>
        <input
          type="text"
          required
          value={displayName}
          onChange={handleChange}
          name="displayName"
        />

        <label>Email</label>
        <input
          type="email"
          required
          value={email}
          onChange={handleChange}
          name="email"
        />

        <label>Password</label>
        <input
          type="password"
          required
          value={password}
          onChange={handleChange}
          name="password"
        />

        <label>Confirm Password</label>
        <input
          type="password"
          required
          value={confirmPassword}
          onChange={handleChange}
          name="confirmPassword"
        />
        <button type="submit">Sign Up</button>
      </form>
      </div>
    </div>
  );
};

export default SignUpForm;
