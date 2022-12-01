export function PostButtonSee (setSeeButton, userNameId, seePostButton) {
    if (seePostButton === userNameId) {
      setSeeButton(true)
    } else {
      setSeeButton(null)
    }
  }