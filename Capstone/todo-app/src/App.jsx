import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Form from './components/Form'
import TodoList from './components/TodoList'
import Login from './components/Login'
import {Routes, Route} from 'react-router-dom'

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
    saveLocalTodos();
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

  //Get todos from local storage
  const getLocalTodos = () => {
    const storedTodos = localStorage.getItem('todos');
    if (storedTodos){
      setTodos(JSON.parse(storedTodos))
    } else{
      localStorage.setItem('todos', JSON.stringify([]))
    }
  };

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route 
        path="/form" 
        element={
          <div className='todo-container'>
            <Form 
              inputText={inputText}
              setInputText={setInputText}
              todos={todos}
              setTodos={setTodos}
              setStatus={setStatus} 
            />
            <TodoList
              filteredTodos={filteredTodos}
              setTodos={setTodos}
              todos={todos}
            />
          </div>
        }
      />
    </Routes>
  )
}

export default App
