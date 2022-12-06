import React, { useState } from "react";

function AddTweet({ input, tweets }) {
  const [text, setText] = useState("");
  const submit = (e) => {
    e.preventDefault();
    const newText = {
      content: text,
      date: new Date().toISOString(),
      userName: "cheligsher",
    };
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
        {(text.length === 140 || tweets.length == 0)? (
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
