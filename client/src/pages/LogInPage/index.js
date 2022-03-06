import Login from "../../components/Login"
import { NavLink } from 'react-router-dom';

const LoginPage = () => {
    return (
        <div>
             <nav className="LogInNav">
            <NavLink className="link1" to="/login">Log In</NavLink>
            <NavLink  className="link1"to="/signup">Sign Up</NavLink>
            </nav>
            <Login />
            </div>
    )
 }

 export default LoginPage;