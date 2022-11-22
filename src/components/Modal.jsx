import React from 'react';
import '../css/Modal.scss'
import '../css/MainCenterSass.scss'







const Modal = ({selectedPost, children, selectedComment, updateComment}) => {



  return (
    <div className={selectedPost || selectedComment || updateComment ? "modal active" : "modal"}>
      <div className={selectedPost || selectedComment || updateComment ? "contentModal active CreateUpdatePost" : "contentModal CreateUpdatePost"}>
        {children}
      </div>
    </div>









  )
}


export {Modal}