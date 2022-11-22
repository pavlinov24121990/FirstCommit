import React from 'react';
import '../css/Modal.scss'
import '../css/MainCenterSass.scss'







const Modal = ({selectedPost, children, selectedComment}) => {



  return (
    <div className={selectedPost || selectedComment ? "modal active" : "modal"}>
      <div className={selectedPost || selectedComment ? "contentModal active CreateUpdatePost" : "contentModal CreateUpdatePost"}>
        {children}
      </div>
    </div>









  )
}


export {Modal}