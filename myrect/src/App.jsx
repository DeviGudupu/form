import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <div className="container">
        <div className="heading">Header</div>
        <div className="content">
        <ul className='sidebar'>
          <li>About</li>
          <li>Dashboard</li>
          <li>Register</li>
          <li>Login</li>
          <li>contact</li>
          </ul>
          </div>
        <div className="footer">Footer</div>
        
      </div>
    </>
  )
}

export default App