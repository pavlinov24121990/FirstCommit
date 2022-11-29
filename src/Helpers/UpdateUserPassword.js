export async function UpdateUserPassword(e, passwordDigest, navig, setPasswordDigest, setPasswordError, setPasswordConfirmationError) {
    e.preventDefault();
    const form = document.getElementById('updateUserPassword');
    const formData = new FormData(form);
    let request = await fetch('https://study-rails-blog-api.herokuapp.com/api/v1/user', {
      method: 'PUT',
      headers: {
    Authorization: `Bearer ${passwordDigest}`
    },
      body: formData
    });
    let result = await request.json();
    form.reset();
    if (request.ok) {
      setPasswordDigest(false)
      navig("/")
    } else {
      setPasswordError(result.password_confirmation)
      setPasswordConfirmationError(result.password_confirmation)
    }
  }