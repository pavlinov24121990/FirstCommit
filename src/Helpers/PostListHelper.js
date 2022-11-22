export async function PostList(setListPost, setHandleScrollStop, pagePost, searchText, sortBy, sortTo, listPost) {
    let request = await fetch(`https://study-rails-blog-api.herokuapp.com/api/v1/posts?${pagePost}&${searchText}&${sortBy}&${sortTo}`, {
      method: 'GET'
    });   
    let result = await request.json();
    if (request.ok) {
      setListPost([...listPost, ...result])
      if (result === []) {
      setHandleScrollStop(false)
      }
    }
  } 