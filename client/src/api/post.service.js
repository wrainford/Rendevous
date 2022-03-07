import apiClient from "./axios.config";

const getAllPost = () => {
    return apiClient.get("/posts");
}

const showPost = (id) => {
    return apiClient.get(`/posts/${id}`);
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

const editComment = (postId, commentId, data) => {
    return apiClient.get(`/posts/${postId}/comments/${commentId}/edit`, data);
}

const updateComment = (id, data) => {
    return apiClient.put(`/posts/comments/${id}`, data);
}

const deleteComment = (id) => {
    return apiClient.delete(`/posts/comments/${id}`);
}

const addImage = (id) => {
    return apiClient.post(`${id}/image`);
}


export {getAllPost, showPost, createPost, updatePost, destroyPost, createComment, editComment, updateComment, deleteComment, addImage};