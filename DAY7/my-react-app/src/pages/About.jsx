import {useState, useEffect} from 'react';        //detect when something changes, runs in the background
import Navbar from '../components/Navbar';

function About(){
    const [count, setCount] = useState(0);

    const handleClicker = () => {
        // alert("You clicked me!");
        setCount(count + 1);
    }

    useEffect(() => {
        console.log("Component mounted or updated");
    });

    useEffect(() => {
        console.log("Only on first load");
    }, []);

    useEffect(() => {
        console.log(`Count changed! The count is now ${count}`);
    }, [count]);

    useEffect(() => {
        const timer = setInterval(() => {
            console.log("Tick");
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <>
            <Navbar />
            <button onClick={handleClicker}>Click Me</button>
        </>
    )
}

export default About;