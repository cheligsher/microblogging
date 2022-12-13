import { nanoid } from "nanoid";
import React, { useContext } from "react";
import Tweet from "./Tweet";
import AppContext from "../contexts/AppContext";

function TweetList() {
  const { tweetList } = useContext(AppContext);

  const hiddenClass = "visually-hidden";
  return (
    <>
      <div className="tweet-list" key={nanoid()}>
        <div
          className={
            "d-flex justify-content-center mt-4 " +
            (tweetList.length === 0 ? "" : hiddenClass)
          }
        >
          <span className="spinner-border text-light" role="status"></span>
        </div>
        {tweetList.map((tweet) => {
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
