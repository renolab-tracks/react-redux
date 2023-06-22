import PostsActionTypes from "./posts.types.js";
import postsService from "./posts.service";

export const clearPostMessages = () => ({
  type: PostsActionTypes.CLEAR_POST_MESSAGES,
});

export const fetchPostsStart = () => ({
  type: PostsActionTypes.FETCH_POSTS_START,
});

export const fetchPostsSuccess = (posts) => ({
  type: PostsActionTypes.FETCH_POSTS_SUCCESS,
  payload: posts,
});

export const fetchPostsFailure = (errorMessage) => ({
  type: PostsActionTypes.FETCH_POSTS_FAILURE,
  payload: errorMessage,
});

export const fetchPostStart = () => ({
  type: PostsActionTypes.FETCH_POST_START,
});

export const fetchPostSuccess = (post) => ({
  type: PostsActionTypes.FETCH_POST_SUCCESS,
  payload: post,
});

export const fetchPostFailure = (errorMessage) => ({
  type: PostsActionTypes.FETCH_POST_FAILURE,
  payload: errorMessage,
});

export const fetchRelatedPostsStart = () => ({
  type: PostsActionTypes.FETCH_RELATED_POSTS_START,
});

export const fetchRelatedPostsSuccess = (posts) => ({
  type: PostsActionTypes.FETCH_RELATED_POSTS_SUCCESS,
  payload: posts,
});

export const fetchRelatedPostsFailure = (errorMessage) => ({
  type: PostsActionTypes.FETCH_RELATED_POSTS_FAILURE,
  payload: errorMessage,
});

export const editPostStart = (payload) => ({
  type: PostsActionTypes.EDIT_POST_START,
  payload,
});

export const editPostSuccess = (post) => ({
  type: PostsActionTypes.EDIT_POST_SUCCESS,
  payload: post,
});

export const editPostFailure = (errorMessage) => ({
  type: PostsActionTypes.EDIT_POST_FAILURE,
  payload: errorMessage,
});

export const addPostStart = (payload) => ({
  type: PostsActionTypes.ADD_POST_START,
  payload,
});

export const addPostSuccess = (post) => ({
  type: PostsActionTypes.ADD_POST_SUCCESS,
  payload: post,
});

export const addPostFailure = (errorMessage) => ({
  type: PostsActionTypes.ADD_POST_FAILURE,
  payload: errorMessage,
});

export const deletePostStart = (payload) => ({
  type: PostsActionTypes.DELETE_POST_START,
  payload,
});

export const deletePostSuccess = (id) => ({
  type: PostsActionTypes.DELETE_POST_SUCCESS,
  payload: id,
});

export const deletePostFailure = (errorMessage) => ({
  type: PostsActionTypes.DELETE_POST_FAILURE,
  payload: errorMessage,
});

export const fetchPosts = async (dispatch) => {
  dispatch(fetchPostsStart());

  try {
    const response = await postsService.fetchPosts();
    dispatch(fetchPostsSuccess(response.data));
  } catch (error) {
    dispatch(fetchPostsFailure(error.message));
  }
};

export const fetchRelatedPosts = (userId) => async (dispatch) => {
  dispatch(fetchRelatedPostsStart());
  try {
    const response = await postsService.fetchRelatedPosts(userId);
    dispatch(fetchRelatedPostsSuccess(response.data));
  } catch (error) {
    dispatch(fetchRelatedPostsFailure(error.message));
  }
};

export const fetchPost = (id) => async (dispatch) => {
  dispatch(fetchPostStart());
  try {
    const response = await postsService.fetchPost(id);
    dispatch(fetchPostSuccess(response.data));
  } catch (error) {
    dispatch(fetchPostFailure(error.message));
  }
};

export const deletePost = (id) => (dispatch) => {
  dispatch(deletePostStart());
  postsService
    .deletePost(id)
    .then(() => {
      dispatch(deletePostSuccess(id));
      dispatch(fetchPosts());
    })
    .catch((error) => dispatch(deletePostFailure(error.message)));
};
