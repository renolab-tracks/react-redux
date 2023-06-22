import PostsActionTypes from "./users.types";
import {
  updateItemDetails,
  addNewItem,
  deleteItem,
} from "../../utils/modifier";

const initialState = {
  isFetching: false,
  status: "idle",
  data: [],
  details: {},
  errorMessage: null,
  message: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case PostsActionTypes.CLEAR_USER_MESSAGES:
      return {
        ...state,
        errorMessage: null,
        message: null,
      };
    case PostsActionTypes.FETCH_USERS_START:
      return {
        ...state,
        isFetching: true,
      };
    case PostsActionTypes.FETCH_USERS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: action.payload,
      };
    case PostsActionTypes.FETCH_USERS_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };

    case PostsActionTypes.FETCH_USER_START:
      return {
        ...state,
        isFetching: true,
      };
    case PostsActionTypes.FETCH_USER_SUCCESS:
      return {
        ...state,
        isFetching: false,
        details: action.payload,
      };
    case PostsActionTypes.FETCH_USER_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };
    case PostsActionTypes.EDIT_USER_START:
      return {
        ...state,
        isFetching: true,
      };
    case PostsActionTypes.EDIT_USER_SUCCESS:
      return {
        ...state,
        data: updateItemDetails(state.data, action.payload),
        isFetching: false,
      };
    case PostsActionTypes.EDIT_USER_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };
    case PostsActionTypes.ADD_USER_START:
      return {
        ...state,
        isFetching: true,
      };
    case PostsActionTypes.ADD_USER_SUCCESS:
      return {
        ...state,
        data: addNewItem(state.data, action.payload),
        isFetching: false,
      };
    case PostsActionTypes.ADD_USER_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };
    case PostsActionTypes.DELETE_USER_START:
      return {
        ...state,
        isFetching: true,
      };
    case PostsActionTypes.DELETE_USER_SUCCESS:
      return {
        ...state,
        data: deleteItem(state.data, action.payload),
        isFetching: false,
      };
    case PostsActionTypes.DELETE_USER_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
