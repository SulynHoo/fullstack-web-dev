import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Form from './components/Form'
import TodoList from './components/TodoList'

function App() {
  const [inputText, setInputText] = useState("")
  const [todos, setTodos] = useState([])
  const [status, setStatus] = useState('all')
  const [filteredTodos, setFilterTodos] = useState([])

  useEffect(() => {
    getLocalTodos();
  }, []);
  
  useEffect(() => {
    filterHandler();
  }, [todos, status]);

  const filterHandler = () => {
    switch(status){
      case 'completed':
        setFilterTodos(todos.filter(todo => todo.completed === true))
        break;
      case 'incomplete':
        setFilterTodos(todos.filter(todo => todo.completed === false))
        break;
      default:
        setFilterTodos(todos);
        break;
    }
  }

  //Save to local storage
  const saveLocalTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todos));
  };

  const getLocalTodos = () => {
    if(localStorage.getItem('todos') === null){
      localStorage.setItem('todos', JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem('todos'));
      setTodos(todoLocal);
    }
  };

  return (
    <div className='App'>
      <header>
        <h1>Todo List</h1>
      </header>
      <Form 
        inputText={inputText} 
        setInputText={setInputText} 
        todos={todos} 
        setTodos={setTodos}
        setStatus={setStatus} />

      <TodoList 
        todos={todos} 
        setTodos={setTodos} 
        filteredTodos={filteredTodos} />
    </div>
  )
}

export default App
