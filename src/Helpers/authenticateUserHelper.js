export let authenticateUser = async (e, setPasswordDigest, setPasswordsErrors, setEmailErrors) => {
  e.preventDefault()
  const forma = document.getElementById('MainContentForm')
  const formDataa = new FormData(forma)
  let request = await fetch('https://study-rails-blog-api.herokuapp.com/api/v1/auth', {
    method: 'POST',
    body: formDataa
  })
  let result = await request.json()
  forma.reset()
  if (request.ok) {
    setPasswordDigest(result.password_digest)
  } else {
    setPasswordsErrors(result.errors)
    setEmailErrors(result.errors)
  }
}