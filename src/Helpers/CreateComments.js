export async function CreateComments(e, id, passwordDigest, setListComments, setSelectedComment, listComments) {
    e.preventDefault();
    const forma = document.getElementById('CreateNewComment');
    const formaData = new FormData(forma);
    let request = await fetch(`https://study-rails-blog-api.herokuapp.com/api/v1/posts/${id}/comments`, {
      method: 'POST',
      body: formaData,
      headers: {
        Authorization: `Bearer ${passwordDigest}`
      }
    });
    forma.reset()
    let result = await request.json();
    console.log(result)
    if (request.ok) {
      setListComments([result, ...listComments])
      setSelectedComment(null)
    }
  }