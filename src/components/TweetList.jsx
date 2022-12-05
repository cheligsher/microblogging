import React, { useState } from "react";
import Tweet from "./Tweet";

function TweetList({ tweets }) {
  return (
    <div>
      {tweets.map((tweet) => {
        return (
          <div>
            <Tweet tweet={tweet} />
          </div>
        );
      })}
    </div>
  );
}

export default TweetList;
