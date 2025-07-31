import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div classmate="container"></div>
     <div classmate="header">Header</div>
     <div classmate="mainsection">Mainsection</div>
    </>
  )
}

export default App
