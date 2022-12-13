import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserProfile from "./components/UserProfile";
import Home from "./components/Home";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import SignOut from "./components/SignOut";

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
          <Route index element={
            <PrivateRoute><Home user={user} /></PrivateRoute>
          }></Route>
          <Route
            path="/UserProfile"
            element={
            <PrivateRoute><UserProfile userName={user} userChange={userChange} /></PrivateRoute>}
          ></Route>
          <Route path="/SignOut" element={<PrivateRoute>
              <SignOut />
            </PrivateRoute>}>
            
            </Route>
          <Route path="/SignUp" element={<SignUp />}></Route>
          <Route path="/Login" element={<Login />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
