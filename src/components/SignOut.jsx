import React from "react";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

function SignOut() {
  const navigate = useNavigate();
  auth.signOut();
  navigate("/Login");
  return (
    <div className="text-light text-center mt-5">
      You have been successfully signed out! If you are not redirected please{" "}
      <a href="/Login" className="text-decoration-none">
        click here
      </a>
      .
    </div>
  );
}

export default SignOut;
