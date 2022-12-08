import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserProfile from "./components/UserProfile";
import Home from "./components/Home";

function App() {
  const [user, setUser] = useState(
    localStorage.getItem("userName")
      ? JSON.parse(localStorage.getItem("userName"))
      : "cheli"
  );

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
        <Routes>
          <Route index element={<Home user={user} />}></Route>
          <Route
            path="/UserProfile"
            element={<UserProfile userName={user} userChange={userChange} />}
          ></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
