import { nanoid } from "nanoid";
import React from "react";

function Tweet({ tweet }) {
  return (
    <div className="tweet p-3" key={nanoid()}>
      <div className="d-flex justify-content-between pb-2" key={nanoid()}>
        <div key={nanoid()}>{tweet.userName}</div>
        <div key={nanoid()}>{tweet.date}</div>
      </div>
      <div key={nanoid()}>{tweet.content}</div>
    </div>
  );
}

export default Tweet;
