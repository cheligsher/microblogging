import { useEffect, useState, useContext } from "react";
import AddTweet from "./components/AddTweet";
import TweetList from "./components/TweetList";
import { nanoid } from "nanoid";
import axios from "axios";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserProfile from "./components/UserProfile";
import TweetListContext, {
  TweetListProvider,
} from "./contexts/TweetListContext";

function App() {
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
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <AddTweet input={getInput} tweets={tweetList} user={user} />
                  <TweetList />
                </>
              }
            ></Route>

            <Route
              path="/UserProfile"
              element={<UserProfile userName={user} userChange={userChange} />}
            ></Route>
          </Routes>
        </TweetListContext.Provider>
      </div>
    </BrowserRouter>
  );
}

export default App;
