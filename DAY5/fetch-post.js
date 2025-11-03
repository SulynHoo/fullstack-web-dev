let promise = fetch("https://jsonplaceholder.typicode.com/posts/1");

promise
    .then(response => response.json())
    .then(response => {
        console.log("Response received: ", response)
    });

console.log("After promise");