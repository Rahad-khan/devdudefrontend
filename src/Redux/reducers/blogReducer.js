import { ADD_CONTENT, DELETE_CONTENT, GET_CONTENT, UPDATE_CONTENT } from "../actionTypes/blogActionTypes";

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
        case UPDATE_CONTENT: {
            const blogs = [...state.blogs]
            const blogIndex = blogs.findIndex(blog => blog._id === action.payload._id)

            return {
                ...state,
                blogs: [...state.blogs.slice(0, blogIndex), action.payload, ...state.blogs.slice(blogIndex + 1)]
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
