export function ModalOff(e, setSelectedPost, selectedPost, setSelectedComment, selectedComment) {
    if (selectedPost || selectedComment) {
      setSelectedPost()
      setSelectedComment()
    } else {
      setSelectedPost(null)
      setSelectedComment(null)
    }
  }