import React from 'react'
import './Navbar.scss'
import logo from './logo.svg'
import { Outlet, Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
        <nav className='navbar'>
            <div className='navbar__content'>
                <div className='navbar__logo'>
                    <Link to="/">
                        <img src={logo} height="60px" alt='Kladova logo'/>    
                    </Link>   
                </div>

                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/course">Course</Link></li>
                    <li><Link to="/music">Music</Link></li>
                    <li><Link to="/people">People</Link></li>
                </ul>

                <div className='navbar__panel'>
                    <p>DmytroFrame</p>
                </div>
                <img className='navbar__user_icon' src="https://avatars.githubusercontent.com/u/34944544?v=4" alt="user icon" width="45px" />

            </div>
        </nav>
        <Outlet />
    </div>
  )
}
