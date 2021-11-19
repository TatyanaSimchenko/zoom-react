import React, {useState} from "react";
import "../styles/activity.css"

const LikeCount = function () {
  const [count, set] = useState(0)

  return (
    <div className='activity'>
      <button className='activity__btn' onClick={() => set(prev => prev + 1)}><i class="fas fa-heart">
        </i></button>
      <p className='activity__count'>{count}</p>

    </div>
  )
}

export default LikeCount;