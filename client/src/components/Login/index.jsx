import {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import * as authService from "../../api/auth.service"
import "./index.css"
import { LogInPage } from '../Styles/LogIn/LogInPage.styled';
import { FormComponent } from '../Styles/LogIn/FormContainer.styled';
import { SignUpButton } from '../Styles/LogIn/SignUpButton.styled';

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
        <FormComponent>
        <form>
            <label htmlFor="email">
               <h4> Email: </h4>
                <input
                    onChange={(e) => setEmail(e.target.value)} 
                    value={email}
                    type="text"
                    name="email"
                    placeholder="Enter Your Email"
                />
            </label>
            <label>
                <h4>Enter Your Password:</h4>
                <input 
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    type="text"
                    name="password"
                    placeholder="Enter Your Password"
                />
            </label>
            <SignUpButton>
            <button onClick={handleSubmit}>Sign In</button>
            </SignUpButton>
        </form>
        </FormComponent>
        </LogInPage>
    </div>
  )
}

export default Login;