import React from 'react'
import { withRouter } from 'react-router-dom'
import LogOut from '../LogOut'
import './index.css'

const Header = () => {
  return (
    <div className='header-container'>
        <div className='logo-container'>
            Logo
        </div>
        <nav className='nav-container'>
            <p>Home</p>
            <p>About</p>
            <p>Contact</p>
        </nav>
        
      <LogOut/>
    </div>
  )
}

export default withRouter(Header)
