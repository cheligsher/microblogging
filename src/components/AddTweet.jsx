import React, { useState } from "react";
// import Button from 'react-bootstrap/Button'

function AddTweet({ input }) {
  const [text, setText] = useState("");
  const submit = (e) => {
    e.preventDefault();
    const newText = {
      text: text,
      date: new Date(),
      user: "cheligsher",
    };
    // console.log(newText);
    input(newText);
    setText("");
    
  };
  return (
      <form onSubmit={submit}>
        <div className="add-tweet-div">
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
          {text.length === 140 ? (
            <button type="submit" disabled>
              Tweet
            </button>
          ) : (
            <button type="submit">Tweet</button>
          )}
        </div>
      </form>
  );
}

export default AddTweet;