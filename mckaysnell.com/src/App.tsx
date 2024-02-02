import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className="navbar">
        <ul>
          <li>Home</li>
          <li>Blog</li>
        </ul>
      </div>
    </div>
  );
}

export default App
