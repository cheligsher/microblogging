import React, { useEffect, useState } from "react";
import "../styles/index.css";
import "../styles/profile.css";
import { ref, getDownloadURL } from "firebase/storage";
import { storage } from "../firebase";
import greenbird from "../images/greenbird.png";

function UserProfile({ userName, userChange, loggedInUser }) {
  const [imgUrl, setImgUrl] = useState("");
  const [imgFile, setImgFile] = useState(null);
  const [user, setUser] = useState(userName);
  const [isSaved, showIsSaved] = useState(false);

  const isSavedMessage = (
    <div className="text-light">
      <p>Your profile has been saved!</p>
      <p>
        Go back to the{" "}
        <a href="/" className="text-decoration-none">
          home
        </a>{" "}
        page?
      </p>
    </div>
  );

  useEffect(() => {
    const userImg = ref(storage, loggedInUser);
    getDownloadURL(userImg)
      .then((url) => {
        setImgUrl(url);
      })
      .catch(() => console.log("User has no profile picture!"))
      .catch((error) => {
        alert("There was an error: ", error);
      });
  }, [loggedInUser]);

  const saveUserProfile = async () => {
    userChange(user, imgFile);
    showIsSaved(true);
  };

  return (
    <div className="mx-auto mt-5 text-center user-profile-div d-flex flex-column">
      <div className="d-flex flex-row justify-content-between">
        <h2 className="text-light mb-3 text-start pt-4">Profile</h2>
        <img src={imgUrl || greenbird} alt="" />
      </div>
      <div className="text-light text-start">User Name</div>
      <input
        type="text"
        className="p-2 text-light w-100"
        value={user}
        onChange={(e) => setUser(e.target.value)}
      />

      <div className="input-group mt-4">
        <input
          type="file"
          className="form-control"
          id="inputGroupFile02"
          onChange={(e) => setImgFile(e.target.files[0])}
        />
      </div>
      <div className="text-start mt-3 d-flex justify-content-end">
        <button onClick={saveUserProfile}>Save</button>
      </div>
      {isSaved ? isSavedMessage : ""}
    </div>
  );
}
export default UserProfile;
