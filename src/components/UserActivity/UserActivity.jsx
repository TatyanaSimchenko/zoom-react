import React from "react";
import LikeCount from "../Activities/LikeCount";
import Retweet from "../Activities/Retweet";

import "./userActivity.css";
const UserActivity = () => {
  return (
    <div className="user-activity">
      <Retweet />
      <LikeCount />
    </div>
  );
};

export default UserActivity;
