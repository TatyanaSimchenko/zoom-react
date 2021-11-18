import React, {useState} from "react";

const Like = function () {
  const [count, set] = useState(0)

  // function increment() {
  //   set(count + 1)
  // }
  return (
    <div className='like'>
      <button className='like__btn' onClick={() => set(prev => prev + 1)}><i class="fas fa-heart"></i></button>
      <p>{count}</p>

    </div>
  )
}

export default Like;