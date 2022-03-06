import React from 'react'
import { NavLink } from 'react-router-dom';

const LogOut = () => {
  
  return (
    <div>
      <NavLink to="/">Sign In</NavLink>
      You have successfully logged out. 
    </div>
  )
}

export default LogOut;