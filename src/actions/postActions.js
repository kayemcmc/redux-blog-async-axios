import axios from 'axios';

//Add_post
import {
    ADD_POST,
    GET_POSTS,
    GET_POST,
    POSTS_LOADING,
    DELETE_POST,
    ADD_COMMENT,
    GET_COMMENTS
} from './types';

export const addPost = postData => dispatch => {
    axios
        .post('http://localhost:9001/posts', postData)
        .then(res =>
        dispatch({
            type: ADD_POST,
            payload: res.data
        }))
        .catch(err => console.log(err.response.data))
} 

export const getPosts = postData => dispatch => {
    dispatch(setPostLoading);
    axios
        .get('http://localhost:9001/posts')
        .then(res =>
        dispatch({
            type: GET_POSTS,
            payload: res.data
        }))
        .catch(err => 
            dispatch({
                type: GET_POSTS,
                payload: null
            })
        )
}

//get single post
export const getPost = (id) => dispatch => {
    dispatch(setPostLoading());
    axios
        .get(`http://localhost:9001/posts/${id}`)
        .then(res =>
        dispatch({
            type: GET_POST,
            payload: res.data
        }))
        .catch(err => 
            dispatch({
                type: GET_POST,
                payload: null
            })
        )
}

//delete posts
export const deletePost = id => dispatch => {
    axios
        .delete(`http://localhost:9001/posts/${id}`)
        .then(res =>
        dispatch({
            type: DELETE_POST,
            payload: id
        }))
        .catch(err => console.log(err.response.data))
} 

//SET LOADING STATA
export const setPostLoading = () => {
    return {
        type: POSTS_LOADING
    }
}

// Add Comment
export const addComment = (postId, commentData) => dispatch => {
    axios
      .post(`http://localhost:9001/posts/${postId}/comments`, commentData)
      .then(res =>
        dispatch({
          type: ADD_COMMENT,
          payload: res.data
        })
      )
      .catch(err =>
        dispatch({
          type: GET_ERRORS,
          payload: err.response.data
        })
      );
  };



export const getComments = (id) => dispatch => {
    axios
        .get(`http://localhost:9001/posts/${id}/comments`)
        .then(res =>
        dispatch({
            type: GET_COMMENTS,
            payload: res.data
        }))
        .catch(err => console.log(err.response.data)
        )
}

