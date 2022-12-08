import { useEffect, useState } from "react";
import AddTweet from "./components/AddTweet";
import TweetList from "./components/TweetList";
import { nanoid } from "nanoid";
import axios from "axios";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserProfile from "./components/UserProfile";
import TweetListContext from "./contexts/TweetListContext";
import NewTweetContext from "./contexts/NewTweetContext";

function App() {
  const [tweetList, setTweetList] = useState([]);
  const postInput = async (newTweet) => {
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
    const interval = setInterval(() => {
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
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const [user, setUser] = useState(() => {
    const storedProfile = JSON.parse(localStorage.getItem("userName"));
    return storedProfile || "cheli";
  });

  const userChange = (userName) => {
    setUser(userName);
  };

  useEffect(() => {
    localStorage.setItem("userName", JSON.stringify(user));
  }, [user]);

  return (
    <BrowserRouter>
      <div className="main-container" key={nanoid()}>
        <Navbar />
        <TweetListContext.Provider value={{ tweetList }}>
          <NewTweetContext.Provider value={{ postInput, user }}>
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <AddTweet />
                    <TweetList />
                  </>
                }
              ></Route>
              <Route
                path="/UserProfile"
                element={
                  <UserProfile userName={user} userChange={userChange} />
                }
              ></Route>
            </Routes>
          </NewTweetContext.Provider>
        </TweetListContext.Provider>
      </div>
    </BrowserRouter>
  );
}

export default App;
