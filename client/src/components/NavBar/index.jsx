import { useNavigate, NavLink, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import * as authService from "../../api/auth.service";

const NavBar = () => {

  const [userId, setuserId] = useState("");
  const navigate = useNavigate();
  const fetchId = async () => {
    let id = JSON.parse(localStorage.getItem("id"));
    setuserId(id);
    // await authService.getProfile().then((res) => {
    //     console.log(res);
    // })
  }

  const logOut = async () => {
    await authService.logout().then(() => {
      navigate("/login");
    })
  }

  useEffect(() => {
    fetchId();
  }, []);


  return (
    <>
      <div>
         <NavLink to="/posts" className="link"
         style={({isActive})=>
        ({color: isActive ? "black" : "blue"})
      }>Home Page</NavLink>

         <NavLink to={`/users/${userId}`} className="link" style={({isActive})=>
         ({color: isActive ? "black" : "blue"})}
         >My Profile</NavLink>

         <NavLink to="/privacy" className="link" style={({isActive})=>
         ({color: isActive ? "black" : "blue"})}>Privacy Page</NavLink>

         <NavLink to="/logout" className="link" onClick={logOut} style={({isActive})=>
         ({color: isActive ? "black" : "blue"})}>
           Log Out </NavLink>


      </div>
    </>
  )
}

export default NavBar;