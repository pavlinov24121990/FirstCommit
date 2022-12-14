export async function ShowPost(id, setTitle, setBody, setName, setListComments, setSeePostButton, setSeeTitle, setSeeBody) {
    let request = await fetch(`https://study-rails-blog-api.herokuapp.com/api/v1/posts/${id}`, {
      method: 'GET'
    });
  let result = await request.json();
    if (request.ok) {
      setTitle(result.title)
      setSeeTitle(result.title)
      setBody(result.body)
      setSeeBody(result.body)
      setName(result.user.full_name)
      setListComments(result.comments)
      setSeePostButton(result.user.id)
    }
}