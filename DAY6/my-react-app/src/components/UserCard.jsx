import { useState, useEffect } from "react";
 
 function UserCard() {
   const [user, setUser] = useState(null);
 
   useEffect(() => {
     async function fetchUser() {
       const res = await fetch("https://jsonplaceholder.typicode.com/users/1");
       const data = await res.json();
       setUser(data);
     }
 
     fetchUser();
   }, []);
 
   if (!user) return <p>Loading...</p>;
 
   return <h3>{user.name}</h3>;
 }

export default UserCard;