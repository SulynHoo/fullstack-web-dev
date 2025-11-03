// fetch("https://jsonplaceholder.typicode.com/users/1")
//   .then(response => response.json())
//   .then(data => console.log(data));


// let promise = fetch("https://jsonplaceholder.typicode.com/users/1");
 
// promise
//     .then(response => response.json())
//     .then(response => {
//         console.log("Response received:", response);
//     });


//---------------------------------------------------------------------------------------

// fetch("https://jsonplaceholder.typicode.com/users")
//    .then(res => res.json())
//    .then(users => {
//      users.forEach(user => {
//        console.log(`${user.name} (${user.email})`);
//      });
//    });

let promise = fetch("https://jsonplaceholder.typicode.com/users");

promise
    .then(res => res.json())
    .then(users => {
        users.forEach(user => {
            console.log(`${user.name} (${user.email})`);
        })
    })

console.log("After promise");

 