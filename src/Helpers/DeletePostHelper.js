export async function DeletePost(e, id, passwordDigest, listPost, setListPost, navig) {
  e.preventDefault();
  let request = await fetch(`https://study-rails-blog-api.herokuapp.com/api/v1/posts/${id}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${passwordDigest}`
    }
  });
  if (request.ok) {
    if (listPost.length) {
      setListPost([...listPost.filter(listPost => listPost.id !== id)])
    } else {
      navig("/")
    }
  }
}
  
  