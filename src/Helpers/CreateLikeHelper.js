export async function CreateLike(e, id, passwordDigest) {
    e.preventDefault();
    let request = await fetch(`https://study-rails-blog-api.herokuapp.com/api/v1/posts/${id}/likes`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${passwordDigest}`
      }
    });
  let result = await request.json();
  if (request.ok) {
    }
  }