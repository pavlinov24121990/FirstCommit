export  async function CreateNewAccount(e, setPasswordDigest, navig, setPassword, setpasswordConfirmation, setFirstТame, setLastName, setEmail, setPasswordError, setPasswordConfirmationError, setEmailError, setFirstТameError, setLastNameError) {
  e.preventDefault();
  const form = document.getElementById('CreateAccountMainContentForm');
  const formData = new FormData(form);
  let request = await fetch('https://study-rails-blog-api.herokuapp.com/api/v1/user', {
    method: 'POST',
    body: formData
  });
  let result = await request.json();
  form.reset();
  if (request.ok) {
    setPasswordDigest(result.password_digest)
    navig("/")
  } else {
      if (result.password?.length) {
        setPasswordError(result.password);
      }
      if (result.password_confirmation?.length) {
       setPasswordConfirmationError(result.password_confirmation);
      }
      if (result.first_name?.length) {
        setFirstТameError(result.first_name);
      } 
      if (result.last_name?.length) {
          setLastNameError(result.last_name);
      }
      if (result.email?.length) {
        setEmailError(result.email)
      }
    } 
}