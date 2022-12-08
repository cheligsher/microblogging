import React, { useState, useContext } from "react";
import NewTweetContext from "../contexts/NewTweetContext";

function AddTweet() {

  const { user } = useContext(NewTweetContext)

  const [text, setText] = useState("");
  const newText = {
    content: text,
    date: new Date().toISOString(),
    userName: user,
  };
  
  const submit = (e) => {
    e.preventDefault();
    setText("");
  };
  return (
    <form onSubmit={submit}>
      <div className="add-tweet-div mx-auto">
        <textarea
          placeholder="What do you have in mind..."
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
        {(text.length === 140 || text.length == 0)? (
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
