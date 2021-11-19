import React from "react";
import "../styles/avatar.css"
export default function Avatar ({photo}) {
  return (
    <div>
      <img className='avatar' src={photo} alt="avatar"></img>
    </div>
  )
}