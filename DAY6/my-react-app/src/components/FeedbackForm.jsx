import {useState} from 'react';

function FeedbackForm (){
    const [name, setName] = useState("");
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Thank you for your comment!');
    }

    return(
        <form onSubmit={handleSubmit}>
            <input type="name" value={name} onChange={(e) => {setName(e.target.value)}} placeholder="Enter name" required /> <br />
            <input type="number" value={rating} onChange={(e) => {setRating(e.target.value)}} placeholder="Enter rating" required /> <br />
            <textarea type="text" value={comment} onChange={(e) => {setComment(e.target.value)}} placeholder="Enter comment" required /> <br />

            <p>Name: {name}</p>
            <p>Rating: {rating}</p>
            <p>Comment: {comment}</p> <br/>

            <button type="submit">Submit form</button>
        </form>
    )
}

export default FeedbackForm;