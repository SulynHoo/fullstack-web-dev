var x = 5;  //essential javascript 4 (ES4)
let y = 10; //essential javascript 5 + (ES5+)

console.log(x + y);

console.log("1" + "1");

let myName = "Sulyn";    //can be changed
// const myName = "Sulyn";     //cannot be changed

myName = "Alice";

console.log("My name is " + myName);

console.log(x * x);

console.log(x + " times " + x  + " = " + x*x);

// BASICS


// DATA TYPES
    // Integer (2 billion positive, 2 billion negative)
    // Decimals (Double, Float)
    // Boolean (0, 1)
    // String

    let distance = 5.5;
    let goThere = true;

    console.log(distance);
    console.log(goThere);

    console.log(typeof(distance));
    console.log(typeof("goThere"));

    // NON-PRIMITIVE DATA TYPES
        // Objects (represented by {})
        // Array (represented by [])
    
    // Array
    let students = ["Celine", "Gina", "Anith"];
    console.log(students[1]);

    // Objects
    let myDetails = {
        "name" : "Sulyn",
        "age" : "20",
        "city": "Penang",
        "students": students
    }

    console.log(myDetails.students[0]);

    let details = {
        {
            "name" : "Sulyn",
            "age" : "20",
            "city": "Penang",
        },
        {
            "name" : "Sulyn",
            "age" : "20",
            "city": "Penang",
        },
        {
            "name" : "Sulyn",
            "age" : "20",
            "city": "Penang"
        };
    }

    console.log(details);