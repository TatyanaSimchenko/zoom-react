import React from "react";
import "../styles/postcard.css"
import authors from './Post';
import Avatar from "./Avatar";
import Author from "./Author";
import AuthorPost from "./AuthorPost";
import UserActivity from "./UserActivity";


const Postcard = () => {
  return(
    <div className='postcard'>
      <header>
        <a href="#" >
          {
           authors.map(author => <Avatar photo={author.photo}/> )
          }
        </a>
        <div className="header__description"><a href="#" className='header__link'>
          {
            authors.map(author => <Author 
                name={author.name}
                nickname={author.nickname}
                date={author.date} />)
          }
        </a></div>
        
      </header>

  {
    authors.map(author => <AuthorPost content={author.content}
    image={author.image}/>)
  }

  <UserActivity />
    </div>
  )
}

export default Postcard;