// Print numbers 1 to 10 using a for loop
for(let i = 1; i <= 10; i++){
    console.log(i);
}

// Print only even numbers between 1 and 20
for(let x = 1; x <= 20; x++){
    if(x%2 == 0){
        console.log(x);
    }
}

// Use a while loop to count down from 5 to 1
let y = 5;

while(y != 0){
    console.log(y);
    y--;
}

// Use a do...while loop to print "Hello!" 3 time
let count = 0;

do{
    console.log("Hello");
    count++;
} while(count < 3);