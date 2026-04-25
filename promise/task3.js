async function getObjTodo() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const data = await response.json();
    return data;
}

async function getUser() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
    const data = await response.json();
    return data;
}

async function allPromises() {
    try {
        const allResults = await Promise.all([getObjTodo(), getUser()]);
        console.log( "Promise.all", allResults);

        const raceResult = await Promise.race([getObjTodo(), getUser()]);
        console.log("Promise.race", raceResult);
    } catch (error) {
        console.error(error);
    }
}

allPromises();

