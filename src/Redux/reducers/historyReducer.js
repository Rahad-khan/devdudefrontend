import { READ_HISTORY } from "../actionTypes/blogActionTypes";

const initialState = {
    history: []
};

const historyReducer = (state = initialState, action) => {
    const exist = state.history.find(blog => blog._id === action.payload._id);
    switch (action.type) {
        case READ_HISTORY: {
            if (exist) {
                const rest = state.history.filter(blog => blog._id !== action.payload._id);
                return {
                    ...state,
                    history: [action.payload, ...rest]
                }
            } else {
                return {
                    ...state,
                    history: [action.payload, ...state.history]
                }
            }
        }

        default:
            return state;
    }
};

export default historyReducer
