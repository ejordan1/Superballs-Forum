import galleryPostReducer from "./gallery-post-reducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    galleryForumList: galleryPostReducer
});

export default rootReducer;