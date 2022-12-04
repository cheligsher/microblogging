import React from 'react'
import Tweet from './Tweet'

function TweetList(props) {
  const { tweets } = props
  {tweets.map((tweet)=>{
    return (
      <div className='tweet-list'>
        {/* {tweet} */}
        {console.log(tweet.text)};
        {tweet.text}
      </div>
    )

  })}
}

export default TweetList