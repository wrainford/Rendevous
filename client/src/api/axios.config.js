import axios from "axios";

const backendAPI = "http://localhost:4000/api";
// const backendAPI = "https://rendevousss.herokuapp.com/api";

const user = JSON.parse(localStorage.getItem("user"));
const apiClient = axios.create({
    baseURL: `${backendAPI}`,
    headers: {
        "Content-type": "multipart/form-data",
        "content-type": "application/json",
        // authorization: `Bearer ${user}`,
    },

});

export default apiClient;