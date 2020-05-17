import {createStore , combineReducers} from 'redux';

import PostReduser from "./ReduserPosts.js";
import messageReduser from './ReduserMessage.js';


const reducers = combineReducers({
    InfoDialogs: messageReduser,
    InfoPosts : PostReduser,
});

let store = createStore(reducers);
console.log(store.getState());

export default store;