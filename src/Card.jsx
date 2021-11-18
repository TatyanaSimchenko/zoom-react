import React from "react";

import "./styles/card.css";

 
import authors from './Data';
import Like from "./components/Like";
import Author from "./components/Author";


const Card = () => {
  const ANAKIN_IMAGE = "https://upload.wikimedia.org/wikipedia/en/thumb/7/74/Anakin-Jedi.jpg/220px-Anakin-Jedi.jpg";

  const RAY_IMAGE = "https://specials-images.forbesimg.com/imageserve/5e63b3c8e1e617000759130e/960x0.jpg?fit=scale";
  

 const content
 = "WTF? Who is Ray? Why she is Skywalker? Luke...?"
//  image={RAY_IMAGE}
//  date={"26 февр."}
  return (
    <div className='card'>

      <a href="#" className='avatar'>
        <img className='avatar__img'  src={ANAKIN_IMAGE} alt="avatar" />
      </a>

      
      <a href="#" className='info'>
        {
          authors.map(author => <Author
            name={author.name}
            nickname={author.nickname} />
            )}
      </a>

      <div className='description'>
         <p className='description__content'>{content}</p>
         <div className='description__image'>
           <img src={RAY_IMAGE} alt="post-photo" />
         </div>

        <div className='description__buttons'>
            <p><i class="fas fa-comment"></i></p>
            <Like />
            <p><i class="fas fa-cloud-download-alt"></i></p>
        </div>

       </div>

      </div>

    
    
  )
}

export default Card;