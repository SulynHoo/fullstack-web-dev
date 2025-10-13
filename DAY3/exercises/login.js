let username = "admin";
let isLoggedIn = true;

// if(isLoggedIn && username == "admin"){
//     console.log("Welcome back, Admin!");
// }
// else if(isLoggedIn && username != "admin"){
//     console.log("Welcome back, user!");
// }
// else{
//     console.log("Please log in.");  
// }

// if(isLoggedIn){
//     if(username == "admin"){
//         console.log("Welcome back, Admin!");
//     }
//     else{
//         console.log("Welcome back, user!");
//     }
// }
// else{
//     console.log("Please log in.");
// }

let message = isLoggedIn ? username == "admin" ? "Welcome back, Admin!" : "Welcome back, user!" : "Please log in.";

console.log(message);