export function ModalOff(e, setSelectedPost, selectedPost, setSelectedComment, selectedComment, setUpdateComment, updateComment) {
    if (selectedPost || selectedComment || updateComment) {
      setSelectedPost()
      setSelectedComment()
      setUpdateComment()
    } else {
      setSelectedPost(null)
      setSelectedComment(null)
      setUpdateComment(null)
    }
  }