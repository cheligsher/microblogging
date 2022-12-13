import { nanoid } from "nanoid";
import React, { useContext, useState } from "react";
import AppContext from "../contexts/AppContext";
import greenbird from "../images/greenbird.png";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";

function Tweet({ tweet }) {
  const { imgUrl } = useContext(AppContext);
  const [username, setUsername] = useState("");
  const [img, setImg] = useState("");

  const compareIds = async () => {
    const docRef = doc(db, "users", tweet.userId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      setUsername(docSnap.data().userName);
      setImg(docSnap.data().imgUrl);
    } else {
      console.log("Error");
    }
  };

  compareIds();

  return (
    <div className="tweet p-3 mx-auto" key={nanoid()}>
      <div className="d-flex justify-content-between pb-2" key={nanoid()}>
        <div key={nanoid()}>{username}</div>
        <img src={img || greenbird} />
        <div key={nanoid()}>{tweet.date}</div>
      </div>
      <div key={nanoid()}>{tweet.content}</div>
    </div>
  );
}

export default Tweet;
