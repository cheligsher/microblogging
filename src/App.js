import { useEffect, useState } from "react";
import AddTweet from "./components/AddTweet";
import TweetList from "./components/TweetList";
import { nanoid } from "nanoid";
import axios from "axios";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserProfile from "./components/UserProfile";

function App() {

  // const [tweetList, setTweetList] = useState(() => {
  //   const storedTweets = JSON.parse(localStorage.getItem("tweets"));
  //   return storedTweets || [];
  // });
  const [tweetList, setTweetList] = useState([]);
  const getInput = async (newTweet) => {
    try {
      const newTweetList = [newTweet, ...tweetList];
      const res = await axios.post(
        "https://micro-blogging-dot-full-stack-course-services.ew.r.appspot.com/tweet",
        newTweet
      );
      setTweetList(newTweetList);
    } catch (err) {
      console.error("Error: " + err);
    }
  };

  useEffect(() => {
    try {
      const getTweets = async () => {
        const resp = await axios.get(
          "https://micro-blogging-dot-full-stack-course-services.ew.r.appspot.com/tweet"
        );
        const data = await resp.data.tweets;
        setTweetList(data);
      };
      getTweets();
    } catch (e) {
      console.error("Error: " + e);
    }
  }, []);

  const [user, setUser] = useState("cheli")

  const userChange = (userName) => {
    // console.log(e.target.value);
    setUser(userName)
  }

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user))
  }, [user])

  return (
    <BrowserRouter>
      <div className="main-container" key={nanoid()}>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <AddTweet input={getInput} tweets={tweetList} />
                <TweetList tweets={tweetList} />
              </>
            }
          ></Route>
          <Route path="/UserProfile" element={<UserProfile userName={user} userChange={userChange} />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
