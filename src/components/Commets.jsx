import React from 'react';
import '../css/PostCommentsSass.scss'




const Commets = ({comments}) => {
  console.log(comments.body)
  return (
   <div className="comment">
        <ul>
          <li>
            <p>
              {comments.body}
            </p>
          </li>
        </ul>
      </div>
  )  
}


export {Commets}