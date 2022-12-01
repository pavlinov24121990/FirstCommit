import React from 'react';
import { CreateLike } from '../Helpers/CreateLikeHelper'
import { DeletePost } from '../Helpers/DeletePostHelper'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPenToSquare, faMinus, faHeart, faCircleXmark, faCommentMedical } from '@fortawesome/free-solid-svg-icons'
import '../css/MainCenterSass.scss'
import { useParams } from 'react-router';
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { ModalOff } from '../Helpers/ModalOffHelper'
import { Modal } from '../components/Modal';
import { UpdatePost } from '../Helpers/UpdatePostHelper'
import { ShowPost } from "../Helpers/ShowPostHelper";
import '../css/PostCommentsSass.scss'
import { Commets } from '../components/Commets'
import { CreateComments } from "../Helpers/CreateComments";
import { showUser } from '../Helpers/ShowUserHelper';
import { PostButtonSee } from "../Helpers/PostButtonSee";
import { UpdateCommets } from "../Helpers/UpdateCommets";

const PostComments = ({passwordDigest, userNameId, setUserName, setUserNameId}) => {
  const { id } = useParams()
  const [title, setTitle] = useState()
  const [body, setBody] = useState()
  const [name, setName] = useState()
  const navig = useNavigate();
  const [selectedPost, setSelectedPost] = useState()
  const [listPost, setListPost] = useState([])
  const [selectedComment, setSelectedComment] = useState()
  const [listComments, setListComments] = useState([])
  const [buttonCreatePost, setButtonCreatePost] = useState("")
  const [seebutton, setSeeButton] = useState()
  const [email, setEmail] = useState()
  const [post, setPost] = useState()
  const [seePostButton, setSeePostButton] = useState()
  const [updateComment, setUpdateComment] = useState()
  const [seetitle, setSeeTitle] = useState("")
  const [seebody, setSeeBody] = useState("")
  const [seeBodyComment, setSeeBodyComment] = useState("")

    
    
    
  let ListCommentsSee = listComments && listComments.map((comments) => {
    return <Commets key={comments.id} id={id} comments={comments} passwordDigest={passwordDigest} listComments={listComments} setListComments={setListComments} setSelectedComment={setSelectedComment} setSelectedPost={setSelectedPost} userNameId={userNameId} setUpdateComment={setUpdateComment} setSeeBodyComment={setSeeBodyComment}/>
  })
  
  
  useEffect(() => {
    ShowPost(id, setTitle, setBody, setName, setListComments, setSeePostButton, setSeeTitle, setSeeBody)
  }, [selectedPost])

  useEffect(() => {
    showUser(setEmail, setUserName, passwordDigest, setUserNameId);
    }, []);
  
  useEffect(() => {
    PostButtonSee (setSeeButton, userNameId, seePostButton);
    }, [seePostButton]);
  
  
 
  return (
    <section className='MainCenter'>
      <div className="centerPost">
        <div>
          <div>
            {(seebutton) && <FontAwesomeIcon onClick={e => setSelectedPost(id)} icon={faPenToSquare} />}
            {(seebutton) && <FontAwesomeIcon onClick={e => DeletePost(e, id, passwordDigest, listPost, setListPost, navig)} icon={faMinus} />}
          </div>
          <h2>{title}</h2>
          <p className="postBody">{body}</p>
        </div>
        <div className="like">
          <p className="UsersName">
            {name}
          </p>
          <FontAwesomeIcon onClick={e => CreateLike(e, id, passwordDigest)} icon={faHeart} />
          <FontAwesomeIcon onClick={e => setSelectedComment(id)} icon={faCommentMedical} />
        </div>
      </div>
      {ListCommentsSee}
     <Modal selectedPost={selectedPost} setSelectedPost={setSelectedPost}>
      <span><FontAwesomeIcon onClick={e => {ModalOff(setSelectedPost, setSelectedComment, setUpdateComment, setButtonCreatePost)}} icon={faCircleXmark} /></span>
      <form onSubmit={ e => UpdatePost(e, id, passwordDigest, setSelectedPost, setListPost, listPost, setTitle, setBody)} id="CreateNewPost">
        <p>Title post</p>
        <input value={seetitle} onChange={e => setSeeTitle(e.target.value)} type="text" name="post[title]" />
        <p>Body post</p>
          <textarea value={seebody} onChange={e => setSeeBody(e.target.value)} className="PostBody" type="text" name="post[body]"></textarea>
        <input id="InptImg" type="hidden" name="post[image_link]"/>
        <button type="submit">Update post</button>
      </form>
      </Modal>
      {/* Create Comment for post */}
      <Modal selectedComment={selectedComment} setSelectedComment={setSelectedComment}>
      <span><FontAwesomeIcon onClick={e => {ModalOff(setSelectedPost, setSelectedComment, setUpdateComment, setButtonCreatePost)}} icon={faCircleXmark} /></span>
      <form onSubmit={e => CreateComments(e, id, passwordDigest, setListComments, setSelectedComment, listComments)} id="CreateNewComment">
        <p>Comment for post</p>
        <textarea className="PostBody" type="text" name="comment[body]"></textarea>
        <button type="submit">Create comment for post</button>
      </form>
      </Modal>
      {/* Update comments */}
      <Modal updateComment={updateComment} setUpdateComment={setUpdateComment}>
      <span><FontAwesomeIcon onClick={e => {ModalOff(setSelectedPost, setSelectedComment, setUpdateComment, setButtonCreatePost)}} icon={faCircleXmark} /></span>
      <form onSubmit={ e => UpdateCommets(e, id, updateComment, passwordDigest, listComments, setListComments, setUpdateComment)} id="UpdateComment">
        <p>Comment for post</p>
        <textarea value={seeBodyComment} onChange={e => setSeeBodyComment(e.target.value)} className="PostBody" type="text" name="comment[body]"></textarea>
        <button type="submit">Update comment for post</button>
      </form>
      </Modal>
    </section>
  )
}
export {PostComments}