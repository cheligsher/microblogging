import { nanoid } from "nanoid";
import React, { useState } from "react";
import Tweet from "./Tweet";

function TweetList({ tweets }) {
  const hiddenClass = "visually-hidden"
  return (
    <>
      <div className="tweet-list" key={nanoid()}>
        <div className={"d-flex justify-content-center mt-4 " + (tweets.length == 0 ? "" : hiddenClass)}>
          <span className="spinner-border text-light" role="status"></span>
        </div>
        {tweets.map((tweet) => {
          return (
            <div key={nanoid()}>
              <Tweet tweet={tweet} />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default TweetList;
