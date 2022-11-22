export async function ShowPost(id, setTitle, setBody, setName, setListComments) {
    let request = await fetch(`https://study-rails-blog-api.herokuapp.com/api/v1/posts/${id}`, {
      method: 'GET'
    });
    let result = await request.json();
    console.log(result)
    if (request.ok) {
      setTitle(result.title)
      setBody(result.body)
      setName(result.user.full_name)
      setListComments(result.comments)
      console.log(result)
    }
}