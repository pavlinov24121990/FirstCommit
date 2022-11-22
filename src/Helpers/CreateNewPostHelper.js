

export async function CreateNewPost(e, passwordDigest, setSelectedPost, setListPost, listPost) {
    e.preventDefault();
    const forma = document.getElementById('CreateNewPost');
    const formaData = new FormData(forma);
    let request = await fetch('https://study-rails-blog-api.herokuapp.com/api/v1/posts', {
      method: 'POST',
      body: formaData,
      headers: {
        Authorization: `Bearer ${passwordDigest}`
      }
    });
    forma.reset()
    let result = await request.json();
    if (request.ok) {
      setSelectedPost(null)
      setListPost([result, ...listPost])
    }
  }









  