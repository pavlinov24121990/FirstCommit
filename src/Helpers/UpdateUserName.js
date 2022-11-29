export async function UpdateUserName(e, passwordDigest, navig, setUserName, setFirstТameError, setLastNameError) {
    e.preventDefault();
    const form = document.getElementById('updateUserName');
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
      setUserName(result.full_name)
      navig("/")
    } else {
      setFirstТameError(result.first_name)
      setLastNameError(result.last_name)
    }
  }