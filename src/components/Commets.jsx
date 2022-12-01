import React from 'react';
import '../css/PostCommentsSass.scss';
import { faPenToSquare, faMinus, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DeleteComments } from "../Helpers/DeleteCommentsHelper";
import { useState, useEffect } from "react";

import { ButtonSeeComents } from "../Helpers/ButtonSeeComents";


const Commets = ({ id, comments, passwordDigest, listComments, setListComments, setSelectedComment, setSelectedPost, userNameId, setUpdateComment, setSeeBodyComment }) => {
  
  const [buttonCreatePost, setButtonCreatePost] = useState("")
 
  const [seeButtoComent, setSeeButtoComent] = useState()


 
  useEffect(() => {
    ButtonSeeComents (setSeeButtoComent, userNameId, comments);
    }, [seeButtoComent]);

  return (
   <div className="comment">
      <p>
        {comments.body}
      </p>
      <div className="commentProps">
        <p className="fullName">{comments.user.full_name}</p>
        {(seeButtoComent) && <FontAwesomeIcon onClick={e => { setUpdateComment(comments.id); setSeeBodyComment(comments.body) }} icon={faPenToSquare} />}
        {(seeButtoComent) && <FontAwesomeIcon onClick={e => DeleteComments(e, id, comments.id, passwordDigest, listComments, setListComments)} icon={faMinus} />}
      </div>
    </div>
  )  
}

export {Commets}