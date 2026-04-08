const users = [
    {
    name: "Вася",
    email: "testmail1@gmail.com",
    age: 22
    },
    {
    name: "Лана",
    email: "vtestmail2@gmail.com",
    age: 33
    },
    {
    name: "Вазген",
    email: "mashatestmail3@gmail.com",
    age: 44
}
    ];

for ( const {name, email, age} of users) {
    console.log(name, email, age)
    }
