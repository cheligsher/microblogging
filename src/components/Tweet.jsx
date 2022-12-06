import React from "react";

function Tweet({ tweet }) {
  return (
    <div className="tweet p-3">
      <div className="d-flex justify-content-between pb-2">
        <div>{tweet.user}</div>
        <div>{tweet.date}</div>
      </div>
      <div>{tweet.text}</div>
    </div>
  );
}

export default Tweet;
