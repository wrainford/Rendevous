import React from 'react'
import { NavLink } from 'react-router-dom';

const LogOut = () => {
  
  return (
    <div>
      <nav className="LogInNav">
          <NavLink className="link1" to="/login">Log In</NavLink>
      </nav>
      <h4>You have successfully logged out. </h4>
    </div>
  )
}

export default LogOut;