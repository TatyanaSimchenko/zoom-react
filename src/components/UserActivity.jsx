import React from "react";
import LikeCount from "./LikeCount";
import Retweet from "./Retweet";
import "../styles/userActivity.css"
const UserActivity = () => {
  return (
    <div className='user-activity'>
      <Retweet />
      <LikeCount />
    </div>
    
  )
}

export default UserActivity;