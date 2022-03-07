import Login from "../../components/Login"
import { NavLink } from 'react-router-dom';

const LoginPage = () => {
    return (
        <div>
            <nav className="LogInNav">
            <a href="/login"><h1 className='rendevous'>ren<span className='dev'>dev</span>ous</h1></a>
            {/* <div className="nav-links"> */}
            {/* <NavLink className="link1" to="/login" style={({isActive})=>
         ({color: isActive ? "#66AFA4" : "white"})}>Log In</NavLink>
            <NavLink  className="link1"to="/register" style={({isActive})=>
         ({color: isActive ? "#66AFA4" : "white"})}>Sign Up</NavLink> */}
            
            {/* </div> */}
            </nav>
            <Login />
            </div>
    )
 }

 export default LoginPage;