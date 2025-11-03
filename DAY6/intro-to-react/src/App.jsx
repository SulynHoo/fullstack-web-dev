import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import MyInfo from './components/MyInfo';
import Hello from './components/Hello';
import Welcome from './components/Welcome';
import ProfileCard from './components/ProfileCard';
import InfoCard from './components/InfoCard';
import Counter from './components/Counter';
import LikeButton from './components/LikeButton';

function App() {
  const [count, setCount] = useState(0)

  // return (
  //   <>
  //     <div>
  //       <a href="https://vite.dev" target="_blank">
  //         <img src={viteLogo} className="logo" alt="Vite logo" />
  //       </a>
  //       <a href="https://react.dev" target="_blank">
  //         <img src={reactLogo} className="logo react" alt="React logo" />
  //       </a>
  //     </div>
  //     <h1>Vite + React</h1>
  //     <div className="card">
  //       <button onClick={() => setCount((count) => count + 1)}>
  //         count is {count}
  //       </button>
  //       <p>
  //         Edit <code>src/App.jsx</code> and save to test HMR
  //       </p>
  //     </div>
  //     <p className="read-the-docs">
  //       Click on the Vite and React logos to learn more
  //     </p>
  //   </>
  // )


  // return <Hello />

  // return (
  //   <>
  //     <Welcome />
  //     <MyInfo />
  //   </>
  // )

  // return (
  //   <>
  //     <h1>Our Team</h1>
  //     <ProfileCard />
  //     <ProfileCard />
  //   </>
  // )

  // return (
  //   <>
  //     <h1>Our Team</h1>
  //     <InfoCard />
  //     <InfoCard />
  //   </>
  // )

  // return (
  //   <>
  //     <h1>Our Team</h1>
  //     <Welcome name="Alice"/>
  //   </>
  // );

  // return (
  //   <>
  //     <h1>Our Team</h1>
  //     <Counter />
  //   </>
  // )

  return <LikeButton />
}

export default App
