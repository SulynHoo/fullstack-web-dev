import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Welcome from './components/Welcome.jsx'
import Hello from './components/Hello.jsx'
import MyInfo from './components/MyInfo.jsx'
import LikeButton from './components/LikeButton.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Welcome /> */}
    {/* <Hello /> */}
    {/* <MyInfo /> */}
    <LikeButton />
  </StrictMode>,
)
