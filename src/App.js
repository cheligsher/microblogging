import { useEffect, useState } from "react";
import AddTweet from "./components/AddTweet";
import TweetList from "./components/TweetList";

function App() {
  const [tweetList, setTweetList] = useState(() => {
    const storedTweets = JSON.parse(localStorage.getItem("tweets"));
    return storedTweets || [];
  });

  const getInput = (input) => {
    const newTweetList = [input, ...tweetList];
    setTweetList(newTweetList);
  };
  useEffect(() => {
    localStorage.setItem("tweets", JSON.stringify(tweetList));
  }, [tweetList]);

  return (
    <div>
      <AddTweet input={getInput} />
      <TweetList tweets={tweetList} />
    </div>
  );
}

export default App;
