import React, { useState } from "react";
import "./activity.css";

const LikeCount = function () {
  const [count, setCount] = useState(0);

  return (
    <div className="activity">
      <button
        className="activity__btn"
        onClick={() => setCount((prev) => ++prev)}
      >
        <i class="fas fa-heart"></i>
      </button>
      <p className="activity__count">{count}</p>
    </div>
  );
};

export default LikeCount;
