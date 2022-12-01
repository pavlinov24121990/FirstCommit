import React from 'react';
import { CreateLike } from '../Helpers/CreateLikeHelper'
import { DeletePost } from '../Helpers/DeletePostHelper'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPenToSquare, faPlus, faMinus, faHeart } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";
import { showUser } from '../Helpers/ShowUserHelper'
import { ButtonSee } from "../Helpers/ButtonSee";


const MapList = ({ post, setSelectedPost, setButtonCreatePost, passwordDigest, listPost, setListPost, userNameId, setUserNameId, userName, setUserName, setSeeTitlePost, setSeeBodyPost}) => {

  const [seebutton, setSeeButton] = useState()
  const [email, setEmail] = useState()


    useEffect(() => {
    showUser(setEmail, setUserName, passwordDigest, setUserNameId);
    }, []);
  
  useEffect(() => {
    ButtonSee (post, userNameId, setSeeButton);
    }, [seebutton]);
  
  

  return (
    <div className="centerPost">
      <div>
        <div>
          {(seebutton) && <FontAwesomeIcon onClick={e => { setSelectedPost(post.id); setButtonCreatePost(""); }} icon={faPlus} />}
          {(seebutton) && <FontAwesomeIcon onClick={e => { setSelectedPost(post.id); setButtonCreatePost(post.id); setSeeTitlePost(post.title); setSeeBodyPost(post.body) }} icon={faPenToSquare} />}
          {(seebutton) && <FontAwesomeIcon onClick={e => DeletePost(e, post.id, passwordDigest, listPost, setListPost)} icon={faMinus} />}
        </div>
        <h2>{post.title}</h2>
        <p className="postBody">{post.body}</p>
      </div>
      <div className="like">
        <p className="UsersName">
          {post.user.full_name}
        </p>
        <Link to={`/post/${post.id}`}>More details</Link>
        <FontAwesomeIcon onClick={ e => CreateLike(e, post.id, passwordDigest)} icon={faHeart} />
      </div>
    </div>
  )
}
export {MapList}