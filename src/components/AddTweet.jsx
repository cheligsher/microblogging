import React from "react";

function AddTweet() {
  return (
    <form>
      <div className="add-tweet-div">
        <textarea placeholder="What do you have in mind..." rows={8}></textarea>
        <button>Tweet</button>
      </div>
    </form>
  );
}

export default AddTweet;
