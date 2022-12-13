import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserProfile from "./components/UserProfile";
import Home from "./components/Home";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "./firebase";
import { doc, setDoc } from "firebase/firestore";
import { db } from "./firebase";

function App() {
  const [imgUrl, setImgUrl] = useState("");
  const [user, setUser] = useState(
    localStorage.getItem("userName")
      ? JSON.parse(localStorage.getItem("userName"))
      : "cheli"
  );

  const [loggedInUser, setLoggedInUser] = useState(
    JSON.parse(localStorage.getItem("LoggedInUser")) || "cheli"
  );

  const uploadImg = (image) => {
    if (!image) return;
    const storageRef = ref(storage, loggedInUser);

    return uploadBytes(storageRef, image).then((url) => {
      return getDownloadURL(url.ref).then((getUrl) => {
        setImgUrl(getUrl);
        return getUrl;
      });
    });
  };

  const userChange = async (userName, image) => {
    setUser(userName);
    const updatedImg = await uploadImg(image);
    const newUser = { userName: userName, imgUrl: updatedImg };
    setDoc(doc(db, "users", loggedInUser), newUser, { merge: true });
  };

  useEffect(() => {
    localStorage.setItem("userName", JSON.stringify(user));
  }, [user]);

  return (
    <BrowserRouter>
      <div className="main-container" key={nanoid()}>
        <Navbar setLoggedInUser={setLoggedInUser} loggedInUser={loggedInUser} />
        <Routes>
          <Route
            index
            element={
              <PrivateRoute loggedInUser={loggedInUser}>
                <Home user={user} loggedInUser={loggedInUser} imgUrl={imgUrl} />
              </PrivateRoute>
            }
          ></Route>
          <Route
            path="/UserProfile"
            element={
              <PrivateRoute loggedInUser={loggedInUser}>
                <UserProfile
                  userName={user}
                  userChange={userChange}
                  loggedInUser={loggedInUser}
                />
              </PrivateRoute>
            }
          ></Route>
          <Route path="/SignUp" element={<SignUp />}></Route>
          <Route
            path="/Login"
            element={<Login setLoggedInUser={setLoggedInUser} />}
          ></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
