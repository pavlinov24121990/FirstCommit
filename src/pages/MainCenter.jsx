import { Link } from 'react-router-dom';
import "../css/HardReset.css"
import '../css/Fonts.css'
import '../css/MainCenterSass.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPenToSquare, faPlus, faMinus, faHeart, faCircleXmark, faThin } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from "react";
import { Modal } from '../components/Modal';
import { flip } from 'react-animations';
import styled, { keyframes } from 'styled-components';
import { useLayoutEffect, useRef } from "react";

const MainCenter = ({ passwordDigest }) => {

  const [selectedPost, setSelectedPost] = useState(null)
  const [buttonCreatePost, setButtonCreatePost] = useState()
  const [listPost, setListPost] = useState([])
  const [searchText, setSearchText] = useState("")
  const [sortBy, setSortBy] = useState("sort_by=created_at")
  const [sortTo, setSortTo] = useState("sort_to=desc")
  const [pagePost, setPagePost] = useState("")
  const [page, setPage] = useState(2)



  

  const handleScroll = e => {
    if (e.currentTarget.scrollTop + e.currentTarget.clientHeight >= e.currentTarget.scrollHeight) {
      numberPage(); PagePostValue()
    } 
  };


  console.log(page)

  function numberPage() {
    setPage(page + 1)
  }

  function PagePostValue() {
    setPagePost(`&page=${page}`)
  }

  function SortToValue(e) {
    if (e.target.value.length) {
      setSortTo(`sort_to=${e.target.value}`)
    } else {
      setSortTo(e.target.value)
    }
  }

  function SearchValue(e) {
    if (e.target.value.length) {
      setSearchText(`&query=${e.target.value}`)
    } else {
      setSearchText(e.target.value)
    }
  }
  

  
 


  function SortByValue(e) {
    if (e.target.value.length) {
      setSortBy(`sort_by=${e.target.value}`)
    } else {
      setSortBy(e.target.value)
    }
  }
  

  async function CreateNewPost(e) {
    e.preventDefault();
    const forma = document.getElementById('CreateNewPost');
    const formaData = new FormData(forma);
    let request = await fetch('https://study-rails-blog-api.herokuapp.com/api/v1/posts', {
      method: 'POST',
      body: formaData,
      headers: {
        Authorization: `Bearer ${passwordDigest}`
      }
    });
    forma.reset()
    let result = await request.json();
    if (request.ok) {
      PostList()
      setSelectedPost(null)
    } else {
      
    }
  }

  async function CreateLike (e, post) {
    e.preventDefault();
    let request = await fetch(`https://study-rails-blog-api.herokuapp.com/api/v1/posts/${post.id}/likes`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${passwordDigest}`
      }
    });
    let result = await request.json();
    console.log(result)
    if (request.ok) {
      PostList()
    } else {
    }
  }

  async function UpdatePost(e, post) {
    e.preventDefault();
    const forma = document.getElementById('CreateNewPost');
    const formaData = new FormData(forma);
    let request = await fetch(`https://study-rails-blog-api.herokuapp.com/api/v1/posts/${post.id}`, {
      method: 'PUT',
      body: formaData,
      headers: {
        Authorization: `Bearer ${passwordDigest}`
      }
    });
    console.log (formaData)
    forma.reset()
    let result = await request.json();
    if (request.ok) {
      PostList()
      setSelectedPost(null)
    } else {
    }
  }
 
  async function DeletePost(e, post) {
    e.preventDefault();
    let request = await fetch(`https://study-rails-blog-api.herokuapp.com/api/v1/posts/${post.id}`, {
      method: 'DELETE',
      headers: {
      Authorization: `Bearer ${passwordDigest}`
       }
    });
    if (request.ok) {
      PostList()
      
    }
  }

  function buttonFunction (e, post) {
    if (buttonCreatePost) {
          CreateNewPost(e)
    } else {
          UpdatePost(e, post)
        }
  }


  
  async function PostList() {
    let request = await fetch(`https://study-rails-blog-api.herokuapp.com/api/v1/posts?${pagePost}${searchText}&${sortBy}&${sortTo}`, {
      method: 'GET'
      
    });
    console.log(request)
    let result = await request.json();
    setListPost([...listPost,...result])
    console.log(result)
  }
  console.log(listPost)
  useEffect(() => {
    PostList()
  },[searchText, sortBy, sortTo, pagePost])
  

 
  

  


  const ListTitile = listPost && listPost.map((post, setCreateLikeLike) => {
    return <ul key={post.id}>
              <li>
                <div>
                  <span>
                    <FontAwesomeIcon onClick={() => { setSelectedPost(post); setButtonCreatePost(true) }} icon={faPlus} />
                  </span>
                  <span>
                    <FontAwesomeIcon onClick={e => { setSelectedPost(post); setButtonCreatePost(false);  }} icon={faPenToSquare} />
                  </span>
                  <span>
                    <FontAwesomeIcon onClick={ e => DeletePost(e, post)} icon={faMinus} />
                  </span>
                </div>
                <h2>{post.title}</h2>
               <p className="postBody">{post.body}</p>
              </li>
              <div className="like">
                <p className="UsersName">
                  {post.user.full_name}
                </p>
                <span>   
                <FontAwesomeIcon onClick={ e => CreateLike(e, post, setCreateLikeLike)} icon={faHeart} />
                </span>
              </div>
            </ul>
  });
  
  function ModalOff(e, setSelectedPost, selectedPost) {
    if (selectedPost) {
      setSelectedPost()
    } else {
     setSelectedPost(null)
    }
  }

  


  
 
  
    
    


  
  


    return (
      <section onScroll={ e => handleScroll(e)} className='MainCenter'>
        <span>
          <input type="text" onChange={ e => SearchValue(e)} name="" id="" placeholder="Search" />
          <p>Sort to</p>
          <select onChange={ e => SortToValue(e)}>
            <option value="desc">From A to Z</option>
            <option value="asc">From Z to A</option>
          </select>
          <p>Sort by</p>
          <select onChange={ e => SortByValue(e)}>
            <option value="created_at">Date of creation</option>
            <option value="title">Title</option>
            <option value="likes_count">Likes count</option>
         </select>
        </span>
        {ListTitile}
        <Modal selectedPost={selectedPost} setSelectedPost={setSelectedPost, selectedPost}>
          <span><FontAwesomeIcon onClick={e => {ModalOff(e, setSelectedPost)}} icon={faCircleXmark} /></span>
          <form id="CreateNewPost" onSubmit={e => { buttonFunction(e, selectedPost) }}>
            <p>Title post</p>
            <input type="text" name="post[title]" />
            <p>Body post</p>
            <textarea className="PostBody" type="text" name="post[body]"></textarea>
            <input id="InptImg" type="hidden" name="post[image_link]"/>
            <button type="submit">{buttonCreatePost ? "Create" : "Update"} post</button>
          </form>
        </Modal>
      </section>
    )
}

export {MainCenter}