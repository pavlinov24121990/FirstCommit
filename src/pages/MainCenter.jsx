import "../css/HardReset.css"
import '../css/Fonts.css'
import '../css/MainCenterSass.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from "react";
import { Modal } from '../components/Modal';
import { CreateNewPost } from '../Helpers/CreateNewPostHelper'
import { UpdatePost } from '../Helpers/UpdatePostHelper'
import { SearchSortPost } from '../Helpers/SearchSortPostHelper'
import { PostList } from '../Helpers/PostListHelper'
import { MapList } from '../components/ListTitile'
import { ModalOff } from '../Helpers/ModalOffHelper'
import { handleScroll } from '../Helpers/handleScrollHelper'
import { SpanMainSerchAndSort } from '../components/SpanMainSerchAndSort'


const MainCenter = ({ passwordDigest }) => {

  const [selectedPost, setSelectedPost] = useState(null)
  const [buttonCreatePost, setButtonCreatePost] = useState("")
  const [listPost, setListPost] = useState([])
  const [searchText, setSearchText] = useState("")
  const [sortBy, setSortBy] = useState("sort_by=created_at")
  const [sortTo, setSortTo] = useState("sort_to=desc")
  const [pagePost, setPagePost] = useState("")
  const [page, setPage] = useState(2)
  const [handleScrollStop, setHandleScrollStop] = useState(true)
  const [selectedComment, setSelectedComment] = useState()
  const [updateComment, setUpdateComment] = useState()
  

  function numberPage() {
    setPage(page + 1)    
  }

  function PagePostValue() {
    setPagePost(`&page=${page}`);
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
  
  function buttonFunction(e, id) {
    if (buttonCreatePost) {
      UpdatePost(e, id, passwordDigest, setSelectedPost, setListPost, listPost)
    } else {
      CreateNewPost(e, passwordDigest, setSelectedPost, setListPost, listPost)
      }
  }

  useEffect(() => {
    SearchSortPost(setListPost, setHandleScrollStop, setPage, searchText, sortBy, sortTo)
  },[searchText, sortBy, sortTo])

  useEffect(() => {
    PostList(setListPost, setHandleScrollStop, pagePost, searchText, sortBy, sortTo, listPost)
  }, [pagePost])

  const ListTitile = listPost && listPost.map((post) => {
    return <MapList key={post.id} post={post} setSelectedPost={setSelectedPost} setButtonCreatePost={setButtonCreatePost} passwordDigest={passwordDigest} listPost={listPost} setListPost={setListPost}/>
  });
  
  
  
  

  return (
    <section onScroll={ e => handleScroll(e, numberPage, PagePostValue, handleScrollStop)} className='MainCenter'>
      <SpanMainSerchAndSort SearchValue={SearchValue} SortToValue={SortToValue} SortByValue={SortByValue}/>
      {ListTitile}
      <Modal selectedPost={selectedPost} setSelectedPost={setSelectedPost}>
      <span><FontAwesomeIcon onClick={e => {ModalOff(setSelectedPost, setSelectedComment, setUpdateComment, setButtonCreatePost)}} icon={faCircleXmark} /></span>
      <form id="CreateNewPost" onSubmit={e => { buttonFunction(e, selectedPost) }}>
        <p>Title post</p>
        <input type="text" name="post[title]" />
        <p>Body post</p>
        <textarea className="PostBody" type="text" name="post[body]"></textarea>
        <input id="InptImg" type="hidden" name="post[image_link]"/>
        <button type="submit">{buttonCreatePost ? "Update" : "Create"} post</button>
      </form>
      </Modal>
    </section>
  )
}

export {MainCenter}