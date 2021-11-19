import React from "react";
import "../styles/author.css"
export default function Author ({name, nickname, date}) {
  return (
    <div className="author">
      <p className="author__name">{name}</p>
      <p className="author__nickname">{nickname}</p>
      <p className="author__date">{date}</p>
    </div>
  )
}
