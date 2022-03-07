import { useNavigate, NavLink, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import * as authService from "../../api/auth.service";
import {FiAlignJustify} from "react-icons/fi"




import "./index.css"


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


  const [showLinks, setShowLinks]=useState(false);



  return (
<>
    <div className='NavBar'>

      <div className="leftSide"> 
      <a href="/posts"><h1 className='rendevous'>ren<span className='dev'>dev</span>ous</h1></a>
      </div>

        <div className='rightSide'>
        <div className="link" id={showLinks ? "hidden" : ""}> 

         <NavLink to="/posts" className="links" style={({isActive})=>
         ({color: isActive ? "#66AFA4" : "white"})}>Home Page</NavLink>

         <NavLink to={`/users/${userId}`} className="links" style={({isActive})=>
         ({color: isActive ? "#66AFA4" : "white"})}>My Profile</NavLink>

         <NavLink to="/privacy" className="links" style={({isActive})=>
         ({color: isActive ? "#66AFA4" : "white"})}>Privacy Page</NavLink>

         <NavLink to="/logout" className="links" onClick={logOut} style={({isActive})=>
         ({color: isActive ? "#66AFA4" : "white"})}>
           Log Out </NavLink>
           </div>
           <button className='btn' onClick={()=>setShowLinks(!showLinks)}><FiAlignJustify style={{margin:15}} /></button>
           </div>
      </div>
    </>
  )
}

export default NavBar;