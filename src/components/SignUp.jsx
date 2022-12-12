import React from "react";
import '../styles/index.css'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();

const handleSignUp = (e, email, password) => {
  e.preventDefault();
  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    console.log("User signed in!");
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error(errorCode, errorMessage)
  });
}

function SignUp() {
  return (
    <div>
      <form className="d-flex flex-column justify-content-center text-center mt-5">
        <div className="mb-3">
          <label htmlFor="userName" className="text-light d-block">
            User Name
          </label>
          <input type="text" name="userName" className="text-light p-2" placeholder="eg: John Doe"/>
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="text-light d-block">
            Email
          </label>
          <input type="email" name="email" className="text-light p-2" placeholder="eg: john@doe.com" />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="text-light d-block">
            Password
          </label>
          <input type="password" name="password" className="text-light p-2" placeholder="Password" />
        </div>
        <div className="mb-3">
          <label htmlFor="repeat-password" className="text-light d-block">
            Repeat Password
          </label>
          <input type="password" name="repeat-password" className="text-light p-2" placeholder="Repeat your password"/>
        </div>
        <button className="m-auto" onSubmit={handleSignUp}>Sign me up!</button>
      </form>
    </div>
  );
}

export default SignUp;
