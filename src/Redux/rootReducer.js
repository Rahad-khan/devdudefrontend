import { combineReducers } from 'redux'
import blogReducer from './reducers/blogReducer'
import historyReducer from './reducers/historyReducer'


const reducers = {
    blogState: blogReducer,
    historyState: historyReducer
}
const rootReducer = combineReducers(reducers);

export default rootReducer
