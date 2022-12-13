import { nanoid } from "nanoid";
import React, {useContext} from "react";
import AppContext from "../contexts/AppContext";
import greenbird from "../images/greenbird.png"

function Tweet({ tweet }) {
  const {imgUrl} = useContext(AppContext)
  return (
    <div className="tweet p-3 mx-auto" key={nanoid()}>
      <div className="d-flex justify-content-between pb-2" key={nanoid()}>
        <div key={nanoid()}>{tweet.userName}</div>
        <img src={imgUrl || greenbird} />
        <div key={nanoid()}>{tweet.date}</div>
      </div>
      <div key={nanoid()}>{tweet.content}</div>
    </div>
  );
}

export default Tweet;
