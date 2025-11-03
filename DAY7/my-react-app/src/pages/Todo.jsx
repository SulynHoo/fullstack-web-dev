const todos = ["Sweep", "Mop", "Polish"];

function Todo(){
    if(todos.length > 0){
        return (
            <>
            <ul>
            {todos.map((todo, index) => (
                <li key={index}>{todo}</li>
            ))}
            </ul>
            </>
        )
    } else{
        return <h1>No tasks</h1>
    }
}

export default Todo