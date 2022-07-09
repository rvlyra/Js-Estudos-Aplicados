// fetch("https://jsonplaceholder.typicode.com/todos/1")
//   .then((response) => response.json())
// .then((json) => console.log(json));

async function apiUser(url) {
  const response = await fetch(url);
  const jsonBody = await response.json();
  //return jsonBody;
  console.log(response);
}

apiUser("https://jsonplaceholder.typicode.com/users");
