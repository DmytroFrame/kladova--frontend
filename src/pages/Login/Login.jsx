import React from 'react'
import './Login.scss'
import logo from './logo.svg'

export default function Login() {
  return (
    <div className='login'>
      <div className='login__menu'>
        <img src={logo} alt="logo" width="250px" className='login__menu__logo'/>
        <div className='login__menu__content'>
          <h5>Email or username</h5>
          <input type="text" />
          <h5>Password</h5>
          <input type="text" />
        </div>
        <button className='login__menu__btn'>Login In</button>
      </div>

    </div>
  )
}
