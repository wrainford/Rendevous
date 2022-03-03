import axios from "axios";

const backendAPI = "http://localhost:4000/api";
// const backendAPI = "https://rendevousss.herokuapp.com/api";

const apiClient = axios.create({
    baseURL: `${backendAPI}`,
    headers: {
        "Content-type": "multipart/form-data",
    },
});

export default apiClient;