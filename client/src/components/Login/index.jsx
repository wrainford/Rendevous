import {useState} from 'react'
import * as authService from "../../api/auth.service"

const Login = () => {
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");
   
    const handleSubmit = async(e) => {
        e.preventDefault();
        await authService.login(email, password).then(() => {
            setEmail = "";
            setPassword = "";

        });
    };


  return (
    <div>
        <form>
            <label htmlFor="email">
                Email:
                <input
                    onChange={(e) => setEmail(e.target.value)} 
                    value={email}
                    type="text"
                    name="email"
                    placeholder="Enter Your Email"
                />
            </label>
            <label>
                Enter Your Password:
                <input 
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    type="text"
                    name="password"
                    placeholder="Enter Your Password"
                />
            </label>
            <button onClick={handleSubmit}>Sign In</button>
        </form>
    </div>
  )
}

export default Login;