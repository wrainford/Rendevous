import Login from "../../components/Login"
import { NavLink } from 'react-router-dom';

const LoginPage = () => {
    return (
        <div>
           
            {/* <div className="nav-links"> */}
            <nav className=''>
            <a href="/login"> <h1 className='rendevous'>ren<span className='dev'>dev</span>ous</h1> </a>
             </nav>
            {/* <NavLink  className="link1"to="/register">Sign Up</NavLink> */}
            {/* </div> */}
            <Login />
            </div>
    )
 }

 export default LoginPage;