import {useState} from 'react'
import * as authService from "../../api/auth.service"

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [successMsg, setSuccessMsg] = useState("");
    
    const handleSubmit = async(e) => {
        e.preventDevault();
        await authService.login(email, password).then(() => {
            setEmail("");
            setPassword("");

        })
        setSuccessMsg("Hallelujah it works bruh");
    }


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
            <h1>{successMsg}</h1>
        </form>
    </div>
  )
}

export default Login