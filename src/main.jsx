import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import Home from './pages/Home'
import Course from './pages/Course'
import Music from './pages/Music'
import People from './pages/People'
import Login from './pages/Login/Login'





ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>}>
          <Route index element={<Home/>}/>
          <Route path='course' element={<Course/>}/>
          <Route path='music' element={<Music/>}/>
          <Route path='people' element={<People/>}/>

          {/* <Route path='*'></Route> */}

        </Route>
        <Route path='login' element={<Login/>} /> 

      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
