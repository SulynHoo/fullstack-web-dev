import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Clicker from './components/Clicker'
import NameForm from './components/NameForm'
import LoginForm from './components/LoginForm'
import UserCard from './components/UserCard'
import FeedbackForm from './components/FeedbackForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Clicker /> */}
      {/* <NameForm /> */}
      {/* <LoginForm /> */}
      {/* <UserCard /> */}
      <FeedbackForm />
    </>
  )
}

export default App
