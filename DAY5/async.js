// async function getData() {
//    const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
//    const data = await response.json();
//    console.log(data.title);
//  }
 
// getData();


//function needs to be async, only then you can use await


// async function getPost() {
//    try {
//      const res = await fetch("https://jsonplaceholder.typicode.com/posts/1000");
//      if (!res.ok) throw new Error("Post not found.");
//      const data = await res.json();
//      console.log(data);
//    } catch (err) {
//      console.error("Error fetching post:", err.message);
//    }
// }

// getPost();




async function checkUser(id){
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const user = await res.json();

    console.log(user.name);

    if(user.name === "Leanne Graham"){
        console.log("This is our VIP user.");
    } else {
        console.log("Standard user.");
    }
}

checkUser(2);
checkUser(1);