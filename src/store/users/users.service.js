import apiClient from "../../utils/apiClient";
const RESOURCE = "users";

const fetchUsers = () => {
  return apiClient.get(RESOURCE);
};

const deleteUser = (userId) => {
  return apiClient.delete(`${RESOURCE}/${userId}`);
};

const fetchUser = (userId) => {
  return apiClient.get(`${RESOURCE}/${userId}`);
};

export default { fetchUsers, deleteUser, fetchUser };
