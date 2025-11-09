import React from 'react'

const Form = ({setInputText, todos, setTodos, inputText, setStatus}) =>{
    const inputTextHandler = (e) => {
        console.log(e.target.value);
        setInputText(e.target.value);
    };

    const submitTodoHandler = (e) => {
        e.preventDefault();
        setTodos([
            ...todos, {text: inputText, completed: false, id: Math.random() * 1000}
        ]);
        setInputText('');
    }; 

    const statusHandler = (e) => {
        setStatus(e.target.value)
    }

    return(
        <form action="">
            <input value={inputText} onChange={inputTextHandler} type="text" class="todo-input" placeholder="Enter todo name" />
            <button onClick={submitTodoHandler} className='todo-button' type='submit'>
                <i className='fa-solid fa-plus'></i>
            </button>
            <div className='select'>
                <select onChange={statusHandler} name="todos" className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="incomplete">Incomplete</option>
                </select>
            </div>
        </form>
    );
}

export default Form;