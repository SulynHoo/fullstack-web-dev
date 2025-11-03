import {useState} from "react";
import Navbar from "../components/Navbar";

function Home(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    return (
        <>
            <Navbar />
            <div>
                <input type="text" placeholder="Enter name" value={name} onChange={(e) => setName(e.target.value)} />
                <input type="text" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <p>Hello, {name}, your email is {email}</p>
            </div>
        </>
    )
}

export default Home;