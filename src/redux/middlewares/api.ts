const api = store => next => action => {
  console.log('here');
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => {
      console.log(response);
      response.json();
    })
    .then()
    .catch(error => console.log(`Network error:`, error));

  return next(action);
};

export default api;
