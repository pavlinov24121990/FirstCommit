import React from 'react';
import '../css/Modal.scss'
import '../css/MainCenterSass.scss'







const Modal = ({selectedPost, children}) => {



  return (
    <div className={selectedPost ? "modal active" : "modal"}>
      <div className={selectedPost ? "contentModal active CreateUpdatePost" : "contentModal CreateUpdatePost"}>
        {children}
      </div>
    </div>









  )
}


export {Modal}