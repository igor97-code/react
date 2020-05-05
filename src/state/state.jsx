import {RenderingDom} from "../RenderDom";
import PostReduser from "./ReduserPosts.js";
import messageReduser from './ReduserMessage.js';

let Store = {
 _state:{
     Dialogs: [
         {name: 'Дмитрий', id: 1},
         {name: 'Вявеслав', id: 2},
         {name: 'Екатерина', id: 3},
         {name: 'Александа', id: 4}
     ],
     infoMessages: {
         Messages: [
             {message: 'hello hello', id: "1"},
             {message: 'Testtest', id: "2"},
             {message: 'test message', id: "3"}],
         MessageText:'',
     },
     InfoPosts:{
         PostValue:'',
         posts:[
             {post:"qweqweqw", name:"egor",img:"../img/assets/avatar.jpg" ,id:1},
             {post:"hello", name:"hello",img: "../img/assets/avatar.jpg",id:2},
             {post:"testtest", name:"egor",img:"../img/assets/avatar.jpg", id:1},
         ]
     }
 },
    dispatch(action = {}){
     this._state.infoMessages = messageReduser(this._state.infoMessages,action);
     this._state.InfoPosts = PostReduser(this._state.InfoPosts,action);
        RenderingDom(this);
    }

}
export default Store;