import React from 'react'
import { NavLink } from 'react-router-dom';
import './index.css'

const LogOut = () => {
  
  return (
    <div>
        <a href="/login"><h1 className='rendevous'>ren<span className='dev'>dev</span>ous</h1></a>
          <div className="LogOut">
            <h1>Thanks for using Rendevous</h1>
            <h2>You have successfully logged out</h2>
            <br></br>
            <a href="/login" className="signback">Sign In Again</a>
          </div>
    </div>
    
  )
}

export default LogOut;