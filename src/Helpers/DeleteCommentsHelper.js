export async function DeleteComments(e, id, commentsId, passwordDigest, listComments, setListComments) {
    e.preventDefault();
    let request = await fetch(`https://study-rails-blog-api.herokuapp.com/api/v1/posts/${id}/comments/${commentsId}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${passwordDigest}`
      }
    });
    if (request.ok) {
      if (listComments.length) {
        setListComments([...listComments.filter(listComments => listComments.id !== commentsId)])
      } 
    }
  }