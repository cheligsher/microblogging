import React, { useState } from "react";
import "../styles/index.css";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase"
import { useNavigate } from 'react-router-dom'


function SignUp() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()

const handleSignUp = (e) => {
  e.preventDefault();
  console.log("sign up clicked")
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      console.log("User signed in!");
      const user = userCredential.user;
      console.log(user)
      alert("You have successfully signed up!")
      navigate("/Login")
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error(errorCode, errorMessage);
    });
};

  return (
    <div>
      <form className="d-flex flex-column justify-content-center text-center mt-5" onSubmit={handleSignUp}>
        <div className="mb-3">
          <label htmlFor="userName" className="text-light d-block">
            User Name
          </label>
          <input
            type="text"
            name="userName"
            className="text-light p-2"
            placeholder="eg: John Doe"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="text-light d-block">
            Email
          </label>
          <input
            type="email"
            name="email"
            className="text-light p-2"
            placeholder="eg: john@doe.com"
            onChange={(e)=> setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="text-light d-block">
            Password
          </label>
          <input
            type="password"
            name="password"
            className="text-light p-2"
            placeholder="Password"
            onChange={(e)=> setPassword(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="repeat-password" className="text-light d-block">
            Repeat Password
          </label>
          <input
            type="password"
            name="repeat-password"
            className="text-light p-2"
            placeholder="Repeat your password"
          />
        </div>
        <button className="m-auto" type="submit">
          Sign me up!
        </button>
      </form>
      <p className="text-light text-center mt-5">Already have a profile? <a href="/Login" className="text-decoration-none">Log in here!</a></p>
    </div>
  );
}

export default SignUp;
