import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <>
      <div>
         <NavLink to="/posts" className="link"
         style={({isActive})=>
        ({color: isActive ? "black" : "blue"})
      }>Home Page</NavLink>

         <NavLink to="/users" className="link" style={({isActive})=>
         ({color: isActive ? "black" : "blue"})}
         >My Profile</NavLink>

         <NavLink to="/privacy" className="link" style={({isActive})=>
         ({color: isActive ? "black" : "blue"})}>Privacy Page</NavLink>

         <NavLink to="/logout" className="link" style={({isActive})=>
         ({color: isActive ? "black" : "blue"})}>
           Log Out </NavLink>
      </div>
    </>
  )
}

export default NavBar;