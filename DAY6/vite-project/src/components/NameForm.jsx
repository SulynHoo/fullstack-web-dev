import { useState } from "react";

function NameForm(){
    const[name, setName] = useState("");

    return(
        <div>
            <input type="text" placeholder="Enter name" value={name} onChange={(e) => setName(e.target.value)} />
            <p>Hello, </p>
        </div>
    );
}

export default NameForm