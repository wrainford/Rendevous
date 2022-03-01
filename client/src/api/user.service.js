import apiClient from "./axios.config";

const getAllUser = () => {
    return apiClient.get("/users");
}

const showUser = (id) => {
    return apiClient.get(`/users/${id}`);
}

const updateUser = (id, data) => {
    return apiClient.put(`/users/${id}`, data);
}

const destroyUser = (id) => {
    return apiClient.delete(`/users/${id}`);
}

const createProject = (id, data) => {
    return apiClient.post(`/users/${id}/projects`, data);
}

const deleteProject = (id) => {
    return apiClient.delete(`/users/projects/${id}`);
}

export {getAllUser, showUser, updateUser, destroyUser, createProject, deleteProject};