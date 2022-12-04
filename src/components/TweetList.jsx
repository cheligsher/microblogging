import React, { useState } from "react";
import Tweet from "./Tweet";

function TweetList(props) {
  const { tweets } = props;

  return (
    <div>
      {tweets.map((tweet) => {
        return (
          <div className="tweet-list">
            
            
          </div>
        );
      })}
    </div>
  );
}

export default TweetList;
