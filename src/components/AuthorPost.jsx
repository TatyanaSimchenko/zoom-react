import React from "react";
import "../styles/authorPost.css"

export default function AuthorPost ({content, image}) {
          return (
           <div className='author-post'>
              <p className='author-post__content'>{content}</p>
              <img className='author-post__img' src={image} alt="avatar"></img>
            </div>
          )
        }

