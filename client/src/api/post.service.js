import apiClient from "./axios.config";

const users = "/users";

const getAll = () => {
    return apiClient.get(`${users}`);
}

export {getAll};