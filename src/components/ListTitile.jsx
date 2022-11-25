import React from 'react';
import { CreateLike } from '../Helpers/CreateLikeHelper'
import { DeletePost } from '../Helpers/DeletePostHelper'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPenToSquare, faPlus, faMinus, faHeart } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';


const MapList = ({ post, setSelectedPost, setButtonCreatePost, passwordDigest, listPost, setListPost, setTextAreaValue, setTextAreaValueBody}) => {

  return (
    <div className="centerPost">
      <div>
        <div>
          <FontAwesomeIcon onClick={e => { setSelectedPost(true); setButtonCreatePost(""); setTextAreaValue(e.target.value = ""); setTextAreaValueBody(e.target.value = "") }} icon={faPlus} />
          <FontAwesomeIcon onClick={e => { setSelectedPost(true); setButtonCreatePost(post.id); setTextAreaValue(e.target.value = post.body); setTextAreaValueBody(e.target.value = post.title)}} icon={faPenToSquare} />
          <FontAwesomeIcon onClick={ e => DeletePost(e, post.id, passwordDigest, listPost, setListPost)} icon={faMinus} />
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