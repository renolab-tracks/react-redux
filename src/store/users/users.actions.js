import UsersActionTypes from "./users.types.js";
import usersService from "./users.service";

export const clearUserMessages = () => ({
  type: UsersActionTypes.CLEAR_USER_MESSAGES,
});

export const fetchUsersStart = () => ({
  type: UsersActionTypes.FETCH_USERS_START,
});

export const fetchUsersSuccess = (users) => ({
  type: UsersActionTypes.FETCH_USERS_SUCCESS,
  payload: users,
});

export const fetchUsersFailure = (errorMessage) => ({
  type: UsersActionTypes.FETCH_USERS_FAILURE,
  payload: errorMessage,
});

export const fetchUserStart = () => ({
  type: UsersActionTypes.FETCH_USER_START,
});

export const fetchUserSuccess = (post) => ({
  type: UsersActionTypes.FETCH_USER_SUCCESS,
  payload: post,
});

export const fetchUserFailure = (errorMessage) => ({
  type: UsersActionTypes.FETCH_USER_FAILURE,
  payload: errorMessage,
});

export const fetchRelatedUsersStart = () => ({
  type: UsersActionTypes.FETCH_RELATED_USERS_START,
});

export const fetchRelatedUsersSuccess = (users) => ({
  type: UsersActionTypes.FETCH_RELATED_USERS_SUCCESS,
  payload: users,
});

export const fetchRelatedUsersFailure = (errorMessage) => ({
  type: UsersActionTypes.FETCH_RELATED_USERS_FAILURE,
  payload: errorMessage,
});

export const editUserStart = (payload) => ({
  type: UsersActionTypes.EDIT_USER_START,
  payload,
});

export const editUserSuccess = (post) => ({
  type: UsersActionTypes.EDIT_USER_SUCCESS,
  payload: post,
});

export const editUserFailure = (errorMessage) => ({
  type: UsersActionTypes.EDIT_USER_FAILURE,
  payload: errorMessage,
});

export const addUserStart = (payload) => ({
  type: UsersActionTypes.ADD_USER_START,
  payload,
});

export const addUserSuccess = (post) => ({
  type: UsersActionTypes.ADD_USER_SUCCESS,
  payload: post,
});

export const addUserFailure = (errorMessage) => ({
  type: UsersActionTypes.ADD_USER_FAILURE,
  payload: errorMessage,
});

export const deleteUserStart = (payload) => ({
  type: UsersActionTypes.DELETE_USER_START,
  payload,
});

export const deleteUserSuccess = (id) => ({
  type: UsersActionTypes.DELETE_USER_SUCCESS,
  payload: id,
});

export const deleteUserFailure = (errorMessage) => ({
  type: UsersActionTypes.DELETE_USER_FAILURE,
  payload: errorMessage,
});

export const fetchUsers = () => async (dispatch) => {
  dispatch(fetchUsersStart());

  try {
    const response = await usersService.fetchUsers();
    dispatch(fetchUsersSuccess(response.data));
  } catch (error) {
    dispatch(fetchUsersFailure(error.message));
  }
};

export const fetchRelatedUsers = (userId) => async (dispatch) => {
  dispatch(fetchRelatedUsersStart());
  try {
    const response = await usersService.fetchRelatedUsers(userId);
    dispatch(fetchRelatedUsersSuccess(response.data));
  } catch (error) {
    dispatch(fetchRelatedUsersFailure(error.message));
  }
};

export const fetchUser = (id) => async (dispatch) => {
  dispatch(fetchUserStart());
  try {
    const response = await usersService.fetchUser(id);
    dispatch(fetchUserSuccess(response.data));
  } catch (error) {
    dispatch(fetchUserFailure(error.message));
  }
};

export const deleteUser = (id) => (dispatch) => {
  dispatch(deleteUserStart());
  usersService
    .deleteUser(id)
    .then(() => {
      dispatch(deleteUserSuccess(id));
      dispatch(fetchUsers());
    })
    .catch((error) => dispatch(deleteUserFailure(error.message)));
};
