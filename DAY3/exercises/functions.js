// Create a file functions.js and define the following functions:
    // greet(name) – prints a greeting
    const greet = (name) => console.log("Hello, " + name);

    // toCelsius(fahrenheit) – converts Fahrenheit to Celsius
    const toCelsius = (fahrenheit) => {
        return (fahrenheit - 32) * 5 / 9;
    }

    // isAdult(age) – returns true if age ≥ 18
    const isAdult = (age) =>{
        return age >= 18;
    }

    // randomBetween(min, max) – returns a random number between min and max
    const randomBetween = (min, max) =>{
        min = Math.ceil(min);
        max = Math.ceil(max);

        return Math.floor(Math.random() * (max - min) ) + min;
    }
    // Bonus: Convert them all into arrow functions.


console.log(greet("Alice"));
console.log(toCelsius(109));
console.log(isAdult(20));
console.log(randomBetween(1, 100));