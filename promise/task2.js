function getObjTodo() {
    return fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json());
}
  
function getUser() {
    return fetch('https://jsonplaceholder.typicode.com/users/1')
        .then(response => response.json());
}

const allPromises = Promise.all([getObjTodo(), getUser()])
    .then(results => {
        console.log(results);
    })
    .catch(error => {
         console.error(error);
    });
    
const racePromises = Promise.race([getObjTodo(), getUser()])
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.error(error);
    });