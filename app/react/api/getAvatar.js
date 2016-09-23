export default const getAvatar = fetch(
    'https://randomuser.me/api/'
  )
  .then((response) => {
    if (response.ok) {
      return response.json();
    }
    else {
      throw new Error('Cannot reach randomuser.me API');
    }
  })
  .then((json) => {
    return json.results.picture.medium;
  });
