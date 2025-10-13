// Create a file students.js:
// Define an array students containing 3 objects, each with:
    // name (string)

    // age (number)

    // isEnrolled (boolean)

let students = [
    {
        name: "Alice",
        age: 20,
        isEnrolled: true
    },
    {
        name: "Bob",
        age: 22,
        isEnrolled: true
    },
    {
        name: "Charlie",
        age: 21,
        isEnrolled: false
    }
]

// Log all student names
students.forEach(function(student){
    console.log(student.name);
})


// Log only those who are enrolled

// Add a new student using .push()

// Remove one student using .pop()