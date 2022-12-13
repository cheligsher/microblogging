import React, { useState, useContext } from "react";
import AppContext from "../contexts/AppContext";

function AddTweet({ loggedInUser }) {
  const { postInput, user } = useContext(AppContext);

  const [text, setText] = useState("");

  const submit = (e) => {
    e.preventDefault();
    const newText = {
      content: text,
      date: new Date().toISOString(),
      userName: user,
      userId: loggedInUser,
    };
    postInput(newText);
    setText("");
  };
  return (
    <form onSubmit={submit}>
      <div className="add-tweet-div mx-auto">
        <textarea
          placeholder="What would you like to chirp about ..?"
          rows={8}
          value={text}
          maxLength={140}
          onChange={(e) => setText(e.target.value)}
        ></textarea>
        {text.length === 140 ? (
          <span className="alert alert-danger px-2 py-1">
            The tweet can't contain more then 140 chars.
          </span>
        ) : (
          ""
        )}
        {text.length === 140 || text.length === 0 ? (
          <button type="submit" disabled>
            Chirp
          </button>
        ) : (
          <button type="submit">Chirp</button>
        )}
      </div>
    </form>
  );
}

export default AddTweet;
