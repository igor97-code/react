import {RenderingDom} from "../RenderDom";
let Store = {
 _state:{
     Dialogs: [
         {name: 'Дмитрий', id: 1},
         {name: 'Вявеслав', id: 2},
         {name: 'Екатерина', id: 3},
         {name: 'Александа', id: 4}
     ],
     Messages:[
         {message: 'hello hello', id: "1"},
         {message: 'Testtest', id: "2"},
         {message: 'test message', id: "3"}],
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
      if(action.type == 'addpost'){
          this._state.InfoPosts.posts.push({
              post:action.message,
              name:"ignat",
              img:"../img/assets/avatar.jpg",
              id:3
          });
          this._state.InfoPosts.PostValue ='';
          RenderingDom(this);
      }
      else if(action.type == 'addTextPost'){
          this._state.InfoPosts.PostValue = action.value;
          RenderingDom(this);
      }
    }
}
export default Store;