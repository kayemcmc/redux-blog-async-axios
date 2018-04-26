import { ADD_POST, GET_POSTS, GET_POST, DELETE_POST, POSTS_LOADING,ADD_COMMENT, GET_COMMENTS } from '../actions/types';

const initialState ={ 
    posts: [],
    post: {},
    loading: false,
    comments: [],
    comment: {}
}


export default function(state = initialState, action) {
    switch(action.type){
        case POSTS_LOADING: 
            return {
                ...state,
                loading: true
            }
        case GET_POSTS:
            return {
                ...state,
                posts: action.payload,
                loading: false
            }
        case GET_POST:
            return {
                ...state,
                post: action.payload,
                loading: false
            }
        case ADD_POST:
            return {
                ...state,
                posts: [action.payload, ...state.posts]
            }
        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter(post => post.id !== action.payload)
            }
        case GET_COMMENTS:
            return {
                ...state,
                comments: action.payload,
            }
        case ADD_COMMENT:
            return {
                ...state,
                comments: [action.payload, ...state.posts]
            }
        default: 
        return state;
    }
}