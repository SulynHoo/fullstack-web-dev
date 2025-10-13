// Write a function sayHello() that prints a greeting
function sayHello(){
    console.log("Hello");
}

// Write a function square(num) that returns the square of a number
function square(num){
    return num*num;
}

console.log(square(3));

// Write an arrow function isEven(n) that returns true if n is even
const isEven = (n) => {
    return n % 2 == 0;
}

console.log(isEven(6));

// FUNCTION EXPRESSION
let isOdd = function(n){
    return n % 2 == 1;
}

console.log(isOdd(5));