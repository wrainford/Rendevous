import React from "react";
import { useState } from "react";
import "./index.css"
import { useNavigate } from "react-router-dom";
import * as authService from "../../api/auth.service"
import styled from "styled-components";
import {MainContainer} from '../Styles/SignUp/MainContainer.styled'
import {WelcomeText} from '../Styles/SignUp/MainContainer.styled'
import {Container} from'../Styles/SignUp/Container.styled'



// import * as authService from "../../api/auth.service"

const SignUpForm = (e)=>{

     let [email, setEmail] = useState("");
     let [password, setPassword] = useState("");
     let [name, setName] = useState("");
     let [userName, setUserName]= useState("");
     const navigate = useNavigate();

     const handlerSubmit= async(e)=>{

          // const formData = new FormData();
          // formData.append("email", email);
          // formData.append("password", password);
          // formData.append("name", name);
          // formData.append("userName", userName);
           
          e.preventDefault();
          await authService.register(email, password, name, userName).then(()=>{ 
           
           navigate('/login')
          })
           .catch(()=>{
                alert ("Register faild")

           })
         
          }
          //working :)thanks D
          
return(
     <div className="sign-up-container">
          <nav className='sign-up-nav'>
      <a href="/login"> <h1  id="rendevousSign"className='rendevous'>ren<span className='dev'>dev</span>ous</h1> </a>
       </nav>
     <div className="sighUpPage">
          
          <MainContainer>
          <WelcomeText>Sign Up</WelcomeText>
          
          <form >
              <label htmlFor="name">
                   
                   <input className="name1" onChange={(e)=> setName(e.target.value)}
                       value={name}
                       type="text"
                       name="name"
                       placeholder="Enter your name"
                   />
                   </label>
                  

                   <label htmlFor="userName">
                       
                        <input className="name1" onChange={(e)=> setUserName(e.target.value)}
                        value={userName}
                        type="text"
                        name='userName'
                        placeholder="Enter your username"
                        />
                   </label>


                   <label htmlFor="email">
                       
                    <input  className="name1"onChange={(e)=>setEmail(e.target.value)}
                    value={email}
                    email="email"
                    type="text"
                    placeholder="Email"
                    />
                   </label>

                   <label htmlFor="password">
                        <input  className="name1"onChange={(e)=>setPassword(e.target.value)}
                        value= {password}
                        password="password"
                        type="text"
                        placeholder="Passsword"
                        />
                   </label>
                  
                   <button className="signUpnBtn" onClick={handlerSubmit}>Sign Up</button> 
           </form> 
           
           
           </MainContainer>
       </div>
       </div>
     )
}

export default SignUpForm;