import { useState } from "react";
import AddTweet from "./components/AddTweet";
import TweetList from "./components/TweetList";

function App() {
  const [tweetList, setTweetList] = useState([])
  const getInput = (input) => {
  const newTweetList = [...tweetList, input]
  setTweetList(newTweetList)
}
return (
  <div>
      <AddTweet input={getInput} />
      <TweetList tweets={tweetList}/>
    </div>
  );
}

export default App;