import React from "react";
import { useState } from "react";
import "./index.css"
import styled from "styled-components";
import {MainContainer} from '../Styles/SignUp/MainContainer.styled'
import {WelcomeText} from '../Styles/SignUp/MainContainer.styled'
import {FormContainer} from'../Styles/SignUp/FormContainer.styled'
import {ButtonContainer} from'../Styles/SignUp/Button.styled'

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
          <WelcomeText>Welcome</WelcomeText>
          <FormContainer>
          <form>
              <label htmlFor="name">
                   <h4>Name:</h4>
                   <input onChange={(e)=> setName(e.target.value)}
                       value={name}
                       type="text"
                       name="name"
                       placeholder="Enter your name"
                   />
                   </label>
                  

                   <label htmlFor="userName">
                        <h4>Username:</h4>
                        <input onChange={(e)=> setUserName(e.target.value)}
                        value={userName}
                        type="text"
                        userName='userName'
                        placeholder="Enter your username"
                        />
                   </label>


                   <label htmlFor="email">
                       <h4></h4> Email:
                    <input  onChange={(e)=>setEmail(e.currentTarget.value)}
                    value={email}
                    email="email"
                    type="text"
                    placeholder="email"
                    />
                   </label>

                   <lable htmlFor="password">
                        <h4>Password:</h4>
                        <input onChange={(e)=>setPassword(e.target.value)}
                        value= {password}
                        password="password"
                        type="text"
                        placeholder="password"
                        />
                   </lable>
                  < ButtonContainer>
                   <button>Sing Up</button>
                   </ButtonContainer>
           </form> 
           
           </FormContainer>
           </MainContainer>
       </div>
       
     )
}

export default SignUpForm;