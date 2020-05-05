

const PostReduser = (state,action)=>{
    if(action.type == 'addpost'){
        state.posts.push({
            post:action.message,
            name:"ignat",
            img:"../img/assets/avatar.jpg",
            id:3
        });
        state.PostValue ='';
    }
    else if(action.type == 'addTextPost'){
       state.PostValue = action.value;
    }
    return state;
};

export default PostReduser;