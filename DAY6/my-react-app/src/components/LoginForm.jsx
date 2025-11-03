import {useState} from 'react';

function LoginForm() {
   const [email, setEmail] = useState("");
 
   const handleSubmit = (e) => {
     e.preventDefault();
     alert(`Logging in as ${email}`);
   };
 
   return (
     <form onSubmit={handleSubmit}>
       <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
       <button type="submit">Login</button>
     </form>
   );
 }

 export default LoginForm;