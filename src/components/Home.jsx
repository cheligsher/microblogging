import React, { useState, useEffect } from "react";
import AppContext from "../contexts/AppContext";
import AddTweet from "./AddTweet";
import TweetList from "./TweetList";
import { addDoc, getDocs } from "firebase/firestore";
import { tweetsCol } from "../firebase";
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";

function Home({ user, loggedInUser, imgUrl }) {
  const [tweetList, setTweetList] = useState([]);
  const [loggedInUserId, setLoggedInUserId] = useState("");

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setLoggedInUserId(auth.currentUser.uid);
      }
    });
  }, []);

  const postInput = async (newTweet) => {
    try {
      const newTweetList = [newTweet, ...tweetList];
      const docRef = await addDoc(tweetsCol, {
        content: newTweet.content,
        date: newTweet.date,
        userId: loggedInUserId,
      });
      setTweetList(newTweetList);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  const getAllTweets = async () => {
    try {
      const querySnapshot = await getDocs(tweetsCol);
      let newTweets = [];
      querySnapshot.forEach((doc) => {
        newTweets.push({ ...doc.data(), id: doc.id });
      });
      const sortedTweets = newTweets.sort((a, b) => {
        if (b.date < a.date) {
          return -1;
        }
        if (b.date > a.date) {
          return 1;
        }
      });
      setTweetList(sortedTweets);
    } catch (err) {
      console.error("Error getting tweets: ", err);
    }
  };

  useEffect(() => {
    getAllTweets();
  }, []);

  return (
    <div>
      <AppContext.Provider value={{ postInput, tweetList, user, imgUrl }}>
        <AddTweet loggedInUser={loggedInUser} />
        <TweetList />
      </AppContext.Provider>
    </div>
  );
}

export default Home;
