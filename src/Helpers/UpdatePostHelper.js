export async function UpdatePost(e, id, passwordDigest, setSelectedPost, setListPost, listPost, setTitle, setBody) {
    e.preventDefault();
    const forma = document.getElementById('CreateNewPost');
    const formaData = new FormData(forma);
    let request = await fetch(`https://study-rails-blog-api.herokuapp.com/api/v1/posts/${id}`, {
      method: 'PUT',
      body: formaData,
      headers: {
        Authorization: `Bearer ${passwordDigest}`
      }
    });
    forma.reset()
    let result = await request.json();
  if (request.ok) {
    if (listPost.length) {
         listPost.find(postlisl => {
        if (postlisl.id === id) {
          postlisl.title = result.title;
          postlisl.body = result.body;
          setSelectedPost(null)
        }
        return setListPost([...listPost])
         })
    } else {
      setTitle(result.title);
      setBody(result.body);
      setSelectedPost(null)
      }
     
      
      
    }
}
  
