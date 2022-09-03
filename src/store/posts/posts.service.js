import apiClient from "../../utils/apiClient";
const RESOURCE = "posts";

const fetchPosts = () => {
  return apiClient.get(RESOURCE);
};

const deletePost = (postId) => {
  return apiClient.delete(`${RESOURCE}/${postId}`);
};

const fetchPost = (postId) => {
  return apiClient.get(`${RESOURCE}/${postId}`);
};

const fetchRelatedPosts = (userId) => {
  return apiClient.get(`${RESOURCE}?userId=${userId}`);
};

export default { fetchPosts, deletePost, fetchPost, fetchRelatedPosts };
