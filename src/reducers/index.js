import forumPostReducer from './forum-post-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    forumPostReducer: forumPostReducer
})

export default rootReducer;