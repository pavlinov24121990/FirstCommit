export function ButtonSee (post, userNameId, setSeeButton) {
    if (post.user.id === userNameId) {
      setSeeButton(true)
    } else {
      setSeeButton()
    }
  }