import React, { useState } from "react";
import Button from 'react-bootstrap/Button'

function AddTweet() {
    const [text, setText] = useState("")
    
  return (
    <form>
      <div className="add-tweet-div">
        <textarea 
        placeholder="What do you have in mind..." 
        rows={8}
        value= {text}
        onChange={(e)=> setText(e.target.value)}
        ></textarea>
        <button>Tweet</button>
      </div>
    </form>
  );
}

export default AddTweet;
