import {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import * as authService from "../../api/auth.service"
import "./index.css"
import { LogInPage } from '../Styles/LogIn/LogInPage.styled';
import { FormComponent } from '../Styles/LogIn/FormContainer.styled';
import { WelcomeText } from '../Styles/SignUp/MainContainer.styled';


const Login = () => {
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");
    let navigate = useNavigate();
    const handleSubmit = async(e) => {
        e.preventDefault();
        await authService.login(email, password).then(() => {
            setEmail = "";
            setPassword = "";
            navigate("/posts"); 
        })
        .catch(() => {
            alert('Log In Failed. Please try again');
        });
    };
  return (
    <div className='LogInPage'>
    <LogInPage>
    <WelcomeText>Welcome</WelcomeText>
        <FormComponent>
        <form autoComplete="off">
            <label htmlFor="email">
            
                <input
                    onChange={(e) => setEmail(e.target.value)} 
                    value={email}
                    type="text"
                    name="email"
                    placeholder="Enter Your Email"
                />
            </label>
            <label>
                <input 
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    type="password"
                    name="password"
                    placeholder="Enter Your Password"
                />
            </label>
           
            <button  className="LogInBtn" onClick={handleSubmit}>Sign In</button>      
        </form>
        </FormComponent>
        <h4 className='signUpText'>Want to Sign Up ? </h4>
        <a className='reg' href="/register">Sign Up</a>
        </LogInPage>
        
    </div>
  )
}

export default Login;