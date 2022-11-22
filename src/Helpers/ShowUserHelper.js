export const showUser = async(setEmail, setUserName, passwordDigest) => {
  let request = await fetch('https://study-rails-blog-api.herokuapp.com/api/v1/user', {
    method: 'GET',
    headers: {
    Authorization: `Bearer ${passwordDigest}`
    }
  })
  let result = await request.json()
    if (request.ok) {
      setUserName(result.full_name)
      setEmail(result.email)
    }
}

