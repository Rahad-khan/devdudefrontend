import { ADD_CONTENT, DELETE_CONTENT, GET_CONTENT } from "../actionTypes/blogActionTypes";

const initialState = {
    blogs: []
};

const blogReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CONTENT: {
            return {
                ...state,
                blogs: action.payload
            }
        }
        case ADD_CONTENT: {
            return {
                ...state,
                blogs: [...state.blogs, action.payload]
            }
        }
        case DELETE_CONTENT: {
            return {
                ...state,
                blogs: state.blogs.filter(blog => blog._id !== action.payload)
            }
        }
        default:
            return state;
    }
}


export default blogReducer;
