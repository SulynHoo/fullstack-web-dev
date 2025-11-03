import {useState} from "react";

// function NameForm (){
//     const [name, setName] = useState("");

//     return(
//         <div>
//             <input type="text" placeholder="Enter name" value={name} onChange={(e) => setName(e.target.value)} />
//             <p>Hello, {name}</p>
//         </div>
//     );
// }

function NameForm(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    return (
        <div>
            <input type="text" placeholder="Enter name" value={name} onChange={(e) => setName(e.target.value)} />
            <input type="text" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <p>Hello, {name}, your email is {email}</p>
        </div>
    )
}

export default NameForm;