import React, { useState } from "react";
import {
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { GoogleAuthProvider } from "firebase/auth";
const auth = getAuth();
const provider = new GoogleAuthProvider();

function Login({ setLoggedInUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user.uid;
        setLoggedInUser(user);
        localStorage.setItem("LoggedInUser", JSON.stringify(user));
        alert("You have successfully logged in!");
        navigate("/");
      })
      .catch((error) => {
        alert("No user has been found. Please sign up!");
        navigate("/SignUp");
      });
  };

  const GoogleLogin = async () => {
    const userCredential = await signInWithPopup(auth, provider);
    const userId = userCredential.user.uid;
    setLoggedInUser(userId);
    localStorage.setItem("LoggedInUser", JSON.stringify(userId));
    navigate("/");
  };

  return (
    <div>
      <form
        className="d-flex flex-column justify-content-center text-center mt-5"
        onSubmit={handleLogin}
      >
        <div className="mb-3">
          <label htmlFor="email" className="text-light d-block">
            Email
          </label>
          <input
            type="email"
            name="email"
            className="text-light p-2"
            placeholder="eg: john@doe.com"
            onChange={(e) => setEmail(e.target.value)}
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
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="m-auto" type="submit">
          Log me in!
        </button>
        <button onClick={GoogleLogin} className="mx-auto mt-5">
          {/* <img src={require("../images/google-logo.jpg")} imageStyle= 
{{opacity:0.5}} /> */}
          <svg
            className="mx-2"
            height="100%"
            viewBox="0 0 20 20"
            width="8%"
            fit=""
            preserveAspectRatio="xMidYMid meet"
            focusable="false"
          >
            <path
              d="M19.6 10.23c0-.82-.1-1.42-.25-2.05H10v3.72h5.5c-.15.96-.74 2.31-2.04 3.22v2.45h3.16c1.89-1.73 2.98-4.3 2.98-7.34z"
              fill="#4285F4"
            ></path>
            <path
              d="M13.46 15.13c-.83.59-1.96 1-3.46 1-2.64 0-4.88-1.74-5.68-4.15H1.07v2.52C2.72 17.75 6.09 20 10 20c2.7 0 4.96-.89 6.62-2.42l-3.16-2.45z"
              fill="#34A853"
            ></path>
            <path
              d="M3.99 10c0-.69.12-1.35.32-1.97V5.51H1.07A9.973 9.973 0 000 10c0 1.61.39 3.14 1.07 4.49l3.24-2.52c-.2-.62-.32-1.28-.32-1.97z"
              fill="#FBBC05"
            ></path>
            <path
              d="M10 3.88c1.88 0 3.13.81 3.85 1.48l2.84-2.76C14.96.99 12.7 0 10 0 6.09 0 2.72 2.25 1.07 5.51l3.24 2.52C5.12 5.62 7.36 3.88 10 3.88z"
              fill="#EA4335"
            ></path>
          </svg>
          Log in with Google
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
