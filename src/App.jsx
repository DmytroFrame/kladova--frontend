// import { useState } from 'react'
import { Outlet } from 'react-router-dom'
// import axios from 'axios'
import './App.scss'
import Navbar from './components/Navbar/Navbar'
import Copyright from './components/Copyright'



function App() {



  return (
    <>
      <header>
        <Navbar/>
      </header>

      <main>
        <Outlet/>
      </main>

      {/* <footer>
        <Copyright/>
      </footer> */}
    </>
  )
}

export default App
