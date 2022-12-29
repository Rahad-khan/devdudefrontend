import { GET_CONTENT } from "../actionTypes/blogActionTypes";

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
        default:
            return state;
    }
}


export default blogReducer;
