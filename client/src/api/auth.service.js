import apiClient from "./axios.config";
const auth = "/auth";
const user = "/user";

    const register = (email, password, name, userName) => {
        return apiClient
            .post(`${auth}/register`, {email, password, name, userName})
            .then((res) => {
                console.log(res);
            });

    };

    const login = (email, password) => {
        try {
            return apiClient 
                .post(`${auth}/login`, {email, password})
                .then((res) => {
                    console.log(res);
                    if(res.data.token){
                        localStorage.setItem("user", JSON.stringify(res.data.token));
                        localStorage.setItem("id", JSON.stringify(res.data.foundUser._id));
                        localStorage.setItem("userName", JSON.stringify(res.data.foundUser.userName));
                    }
                        return res.data.token
                })
            } catch (err) {
                console.log(err);
            }
        }

    const currentUser = () => {
        let user = localStorage.getItem("user");
        return JSON.parse(user);
    }

    const getProfile = () => {
        let id = localStorage.getItem("id");
        // return apiClient.get(`${id}`);
        return JSON.parse(id);
    }

    const getUserName = () => {
        let userName = localStorage.getItem("userName");
        return JSON.parse(userName);
    }


    const logout = () => {
        localStorage.removeItem("user");
        localStorage.removeItem("id");
        localStorage.removeItem("userName");
    }


export {register, login, currentUser, logout, getProfile}