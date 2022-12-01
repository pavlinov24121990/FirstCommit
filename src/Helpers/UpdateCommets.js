export async function UpdateCommets(e, id, commentsId, passwordDigest, listComments, setListComments, setUpdateComment) {
  e.preventDefault();
  const forma = document.getElementById('UpdateComment');
  const formaData = new FormData(forma);
  let request = await fetch(`https://study-rails-blog-api.herokuapp.com/api/v1/posts/${id}/comments/${commentsId}`, {
    method: 'PUT',
    body: formaData,
    headers: {
      Authorization: `Bearer ${passwordDigest}`
    }
  });
  forma.reset()
  let result = await request.json();
  if (request.ok) {
    listComments.find(commets => {
      if (commets.id === commentsId) {
        commets.body = result.body
        setUpdateComment(null);
        return setListComments([...listComments])
      }
    }) 
  }
}