import React from 'react';
import '../css/PostCommentsSass.scss';
import { faPenToSquare, faMinus, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DeleteComments } from "../Helpers/DeleteCommentsHelper";
import { ModalOff } from '../Helpers/ModalOffHelper'
import { Modal } from '../components/Modal';
import { useState, useEffect } from "react";
import { UpdateCommets } from "../Helpers/UpdateCommets";
import { ButtonSeeComents } from "../Helpers/ButtonSeeComents";


const Commets = ({ id, comments, passwordDigest, listComments, setListComments, setSelectedComment, setSelectedPost, userNameId }) => {
  
  const [buttonCreatePost, setButtonCreatePost] = useState("")
  const [updateComment, setUpdateComment] = useState()
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
        {(seeButtoComent) && <FontAwesomeIcon onClick={e => setUpdateComment(id)} icon={faPenToSquare} />}
        {(seeButtoComent) && <FontAwesomeIcon onClick={e => DeleteComments(e, id, comments.id, passwordDigest, listComments, setListComments)} icon={faMinus} />}
      </div>
      <Modal updateComment={updateComment} setUpdateComment={setUpdateComment}>
      <span><FontAwesomeIcon onClick={e => {ModalOff(setSelectedPost, setSelectedComment, setUpdateComment, setButtonCreatePost)}} icon={faCircleXmark} /></span>
      <form onSubmit={ e => UpdateCommets(e, id, comments.id, passwordDigest, listComments, setListComments, setUpdateComment)} id="UpdateComment">
        <p>Comment for post</p>
        <textarea className="PostBody" type="text" name="comment[body]"></textarea>
        <button type="submit">Update comment for post</button>
      </form>
      </Modal>
    </div>
  )  
}

export {Commets}