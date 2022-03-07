import React from 'react'
import { NavLink } from 'react-router-dom';
import './index.css'

const LogOut = () => {
  
  return (
    <div>
      <nav className="LogInNav">
          <NavLink className="link1" to="/login">Log In</NavLink>
      </nav>
      <div className="LogOut">
      <h4>You have successfully logged out. </h4>
      <div></div>
      </div>
    </div>
    
  )
}

export default LogOut;