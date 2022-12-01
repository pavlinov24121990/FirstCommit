export  function ButtonSeeComents(setSeeButtoComent, userNameId, comments) {
    if (comments.user.id === userNameId) {
      setSeeButtoComent(true)
    } else {
      setSeeButtoComent(null)
    }
  }