export async function DeleteUser(e, navig, passwordDigest, setPasswordDigest) {
    e.preventDefault();
    let request = await fetch(`https://study-rails-blog-api.herokuapp.com/api/v1/user`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${passwordDigest}`
    }
    });
      if (request.ok) {
      setPasswordDigest(false)
      navig("/")
    }
  }