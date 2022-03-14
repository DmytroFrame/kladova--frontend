import { useState } from 'react'
import './App.scss'
import axios from 'axios'
import { Route,  Routes } from 'react-router-dom'
import Music from './pages/Music'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home'
import Course from './pages/Course'
import People from './pages/People'
import Login from './pages/Login/Login'


function App() {
  const [count, setCount] = useState(0)



  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Navbar/>}>
          <Route index element={<Home/>}/>
          <Route path='course' element={<Course/>}/>
          <Route path='music' element={<Music/>}/>
          <Route path='people' element={<People/>}/>
          {/* <Route path='*'></Route> */}
        </Route>
        <Route path='login' element={<Login/>} /> 
      </Routes>
    </div>
  )
}

export default App
