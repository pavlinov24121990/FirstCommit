export async function SearchSortPost(setListPost, setHandleScrollStop, setPage, searchText, sortBy, sortTo) {
    let request = await fetch(`https://study-rails-blog-api.herokuapp.com/api/v1/posts?${searchText}&${sortBy}&${sortTo}`, {
      method: 'GET'
    });
    let result = await request.json();
    if (request.ok)  { 
      setListPost(result)
      setHandleScrollStop(true)
      setPage(2)
    }
  }