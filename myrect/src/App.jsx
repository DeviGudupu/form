import { useState } from 'react'
import About from './components/About'
import Contactus from './components/Contactus'
import Login from './components/Login'
import Profile from './components/Profile'
import Register from './components/Register'
import './App.css'
import { BrowserRouter as Router, Routes, Route }from 'react-router-dom'
function App() {
  const [count, setCount] = useState(0)

  return (
    <><Router>
     <div className='heading'>Heading</div> 
     <div className='content'> style={{display: "flex"}}
      <Sidebar />
      <Routes>
        <Route path="/" element={<About/>}/>
        <Route path="/" element={<Contactus/>}/>
        <Route path="/" element={<Login/>}/>
        <Route path="/" element={<Profile/>}/>
        <Route path="/" element={<Register/>}/>
      </Routes>
     </div>
     <div class="Footer">Footer</div>
     </Router>
         </>
  )
}

export default App