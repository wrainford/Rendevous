import { useState, useEffect, useReducer } from 'react';
import Login from "../../components/Login"
import * as authService from "../../api/auth.service";

const initialState = {
    isLoggedIn: false,
}

const reducer = (prevState, action) => {
    switch(action.type) {
        case "isLoggedIn":
            return {...prevState, isLoggedIn: action.payload}
        default:
            return prevState;
    }
}


const LoginPage = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const {isLoggedIn} = state;

    const userActive = () => {
        if(authService.currentUser()) {
            dispatch({ type: "isLoggedIn", payload: true});
        } else {
            dispatch({ type: "isLoggedIn", payload: false});
        }
    }

    useEffect(() => {
        userActive();
    }, []);

    return (
        <div>
            <h1>This is the LogInPage</h1>
            <Login />
            </div>
    )
 }

 export default LoginPage;