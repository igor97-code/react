

let InfoPosts = {
    PostValue:'',
        posts:[
        {post:"qweqweqw", name:"egor",img:"../img/assets/avatar.jpg" ,id:1},
        {post:"hello", name:"hello",img: "../img/assets/avatar.jpg",id:2},
        {post:"testtest", name:"egor",img:"../img/assets/avatar.jpg", id:1},
    ]
};


const PostReduser = (state = InfoPosts,action)=>{
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
