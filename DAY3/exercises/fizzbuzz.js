// Loops from 1 to 30

// Prints:
    // "Fizz" if the number is divisible by 3

    // "Buzz" if divisible by 5

    // "FizzBuzz" if divisible by both

    // The number if divisible by neither


for(let i = 1; i <= 30; i++){
    if(i%3 == 0 && i%5 == 0){
        console.log("FizzBuzz");
    }
    else{
        if(i%3 == 0){
            console.log("Fizz");
        }
        else if(i%5 == 0){
            console.log("Buzz");
        }
        else{
            console.log(i);7
        }
    }
}