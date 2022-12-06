import { useEffect, useState } from "react";
import AddTweet from "./components/AddTweet";
import TweetList from "./components/TweetList";
import { nanoid } from "nanoid";
import axios, { Axios } from "axios";

function App() {
  const [tweetList, setTweetList] = useState([]);
  
  const getInput = async(newTweet) => {
    const newTweetList = [newTweet, ...tweetList];
    const res = await axios.post("https://micro-blogging-dot-full-stack-course-services.ew.r.appspot.com/tweet", newTweet)
    setTweetList(newTweetList);
  };
  
  useEffect(()=>{ 
    axios.get("https://micro-blogging-dot-full-stack-course-services.ew.r.appspot.com/tweet")
    .then((res) => {
      setTweetList(res.data.tweets)} )
    
  }, [])

  return (
    <div className="main-container" key={nanoid()}>
      <AddTweet input={getInput} />
      <TweetList tweets={tweetList} />
    </div>
  );
}

export default App;
