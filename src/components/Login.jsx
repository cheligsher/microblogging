import React from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
const auth = getAuth();

const handleLogin = (e, email, password) => {
  e.preventDefault();
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      console.log("userCredential");
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error(errorCode, errorMessage);
    });
}


function Login() {
  return (
    <div>
      <form className="d-flex flex-column justify-content-center text-center mt-5">
        <div className="mb-3">
          <label htmlFor="email" className="text-light d-block">
            Email
          </label>
          <input
            type="email"
            name="email"
            className="text-light p-2"
            placeholder="eg: john@doe.com"
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
          />
        </div>
        <button className="m-auto" onSubmit={handleLogin}>Log me in!</button>
      </form>
      <p className="text-light text-center mt-5">Don't have a profile yet? <a href="/SignUp" className="text-decoration-none">Sign up!</a></p>
    </div>
  );
}

export default Login;
