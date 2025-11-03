import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from "react-router-dom";
import Home from "../../../DAY7/my-react-app/src/pages/Home";
import About from "../../../DAY7/my-react-app/src/pages/About";
import User from './pages/User';
import Welcome from './pages/Welcome';
import FruitList from './pages/FruitList';
import Todo from './pages/Todo';

function App() {
  const [count, setCount] = useState(0)

   return (
     <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/about" element={<About />} />
       <Route path="/user/:id" element={<User />} />
       <Route path="/welcome" element={<Welcome isLoggedIn={false} />} />
       <Route path="/fruits" element={<FruitList />} />
       <Route path="/todos" element={<Todo />} />
     </Routes>
   );
 }

export default App
