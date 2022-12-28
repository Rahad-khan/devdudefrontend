import { FETCH_BLOGS } from "../actionTypes/blogActionTypes";

const initialState = {
    blogs: []
};

const blogReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_BLOGS: {
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
