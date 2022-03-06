import React from "react";
import { useState } from "react";
import "./index.css"
import styled from "styled-components";
import {MainContainer} from '../Styles/SignUp/MainContainer.styled'
import {WelcomeText} from '../Styles/SignUp/MainContainer.styled'
import {FormContainer} from'../Styles/SignUp/FormContainer.styled'


// import * as authService from "../../api/auth.service"

const SignUpForm = ()=>{

     let [name, setName]= useState("");
     let[ userName, setUserName]=useState("");
     let[email, setEmail] = useState("");
     let [password, setPassword]=useState("");

     // const handlerSubmit= async(e)=>{
     //      e.preventDefault();
     //      await authService. 
     // }
     
return(
     <div className="sighUpPage">
          <MainContainer>
          {/* <InputContainer> */}
          <WelcomeText>Sign Up</WelcomeText>
          <FormContainer>
          <form>
              <label htmlFor="name">
                   
                   <input onChange={(e)=> setName(e.target.value)}
                       value={name}
                       type="text"
                       name="name"
                       placeholder="Enter your name"
                   />
                   </label>
                  

                   <label htmlFor="userName">
                       
                        <input onChange={(e)=> setUserName(e.target.value)}
                        value={userName}
                        type="text"
                        userName='userName'
                        placeholder="Enter your username"
                        />
                   </label>


                   <label htmlFor="email">
                       
                    <input  onChange={(e)=>setEmail(e.currentTarget.value)}
                    value={email}
                    email="email"
                    type="text"
                    placeholder="Email"
                    />
                   </label>

                   <lable htmlFor="password">
                      
                        <input onChange={(e)=>setPassword(e.target.value)}
                        value= {password}
                        password="password"
                        type="text"
                        placeholder="Password"
                        />
                   </lable>
                  
                   <button className="signUpnBtn">Sign Up</button> 
           </form> 
           
           </FormContainer>
           </MainContainer>
       </div>
       
     )
}

export default SignUpForm;