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
    try{
      const getTweets = async() => {
        const resp = await axios.get("https://micro-blogging-dot-full-stack-course-services.ew.r.appspot.com/tweet")
        const data = await resp.data.tweets
        setTweetList(data)
      }
      getTweets()
    } catch(e){
      console.error("Error: " + e)
    }
  }, [])

  return (
    <div className="main-container" key={nanoid()}>
      <AddTweet input={getInput} tweets={tweetList} />
      <TweetList tweets={tweetList} />
    </div>
  );
}

export default App;
