import Login from "../../components/Login"
import { NavLink } from 'react-router-dom';

const LoginPage = () => {
    return (
        <div>
            <nav className="LogInNav">
            {/* <div className="nav-links"> */}
            <NavLink className="link1" to="/login">Log In</NavLink>
            <NavLink  className="link1"to="/register">Sign Up</NavLink>
            {/* </div> */}
            </nav>
            <Login />
            </div>
    )
 }

 export default LoginPage;