import React from "react";

function SignOut({setLoggedInUser}) {
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
