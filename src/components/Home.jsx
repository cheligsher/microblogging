import React, { useState, useEffect } from "react";
import axios from "axios";
import AppContext from "../contexts/AppContext";
import AddTweet from "./AddTweet";
import TweetList from "./TweetList";



function Home({user}) {
  const [tweetList, setTweetList] = useState([]);

  const postInput = async (newTweet) => {
    try {
      const newTweetList = [newTweet, ...tweetList];
      const res = await axios.post(
        "https://micro-blogging-dot-full-stack-course-services.ew.r.appspot.com/tweet",
        newTweet
      );
      console.log(res.data);
      setTweetList(newTweetList);
    } catch (err) {
      console.error("Error: " + err);
    }
  };

  const getTweets = async () => {
    try{
        const resp = await axios.get(
      "https://micro-blogging-dot-full-stack-course-services.ew.r.appspot.com/tweet"
    );
    const data = await resp.data.tweets;
    if(data.length !== tweetList.length)
      setTweetList(data);
    }catch (e) {
        console.error("Error: " + e);
  }};
  
  useEffect(() => {
    getTweets()
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
        getTweets();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <AppContext.Provider value={{ postInput, tweetList, user }}>
        <AddTweet />
        <TweetList />
      </AppContext.Provider>
    </div>
  );
}

export default Home;
