import apiClient from "./axios.config";

const getAllPost = () => {
    return apiClient.get("/posts");
}

const createPost = (data) => {
    return apiClient.post("/posts", data);
}

const updatePost = (id, data) => {
    return apiClient.put(`/posts/${id}`, data);
}

const destroyPost = (id) => {
    return apiClient.delete(`/posts/${id}`);
}

const createComment = (id, data) => {
    return apiClient.post(`/posts/${id}/comments`, data);
}

//Unsure how to pass in 2 req.params.id - need to figure out later
const editComment = (id1, id2, data) => {
    return apiClient.get(`/posts/${id1}/comments/${id2}/edit`, data);
}

const updateComment = (id, data) => {
    return apiClient.put(`/posts/comments/${id}`, data);
}

const deleteComment = (id) => {
    return apiClient.delete(`/posts/comments/${id}`);
}


export {getAllPost, createPost, updatePost, destroyPost, createComment, editComment, updateComment, deleteComment};