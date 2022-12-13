import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom'
const auth = getAuth();


function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        console.log("userCredential");
        const user = userCredential.user;
        console.log(user);
        alert("You have successfully logged in!")
        navigate("/")
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(errorCode, errorMessage);
      });
  };
  return (
    <div>
      <form className="d-flex flex-column justify-content-center text-center mt-5" onSubmit={handleLogin}>
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
        <button className="m-auto" type="submit">
          Log me in!
        </button>
      </form>
      <p className="text-light text-center mt-5">
        Don't have a profile yet?{" "}
        <a href="/SignUp" className="text-decoration-none">
          Sign up!
        </a>
      </p>
    </div>
  );
}

export default Login;
