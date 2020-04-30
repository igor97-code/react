import React from "react";
import Post from "../posts/posts.jsx";



const Profile = (props)=>{
    console.log(props);
    let newPostsElement = React.createRef();
    let newposts = () =>{
        let text = newPostsElement.current.value;
        props.addPost(text);
    }

   let arrayPosts = props.posts.map((item,key)=>{
        return  <Post key = {key} post = {item.post} name = {item.name} img = {item.img} />
    });
   let getTextPost = ()=>{
       props.addPostValue(newPostsElement.current.value);
   }

    return(
        <div className = 'content-main'>
            <div className = 'content-main-logo'>
            </div>
            <div className = 'content-main-profile'>
                <div className = "add-posts">
                    <textarea onChange = {getTextPost} ref = {newPostsElement} value={props.postValue} />
                    <div className= "add-post-button">
                    <button onClick = {newposts}>добавить</button>
                    </div>
                </div>
                {arrayPosts}
            </div>
        </div>
    )
}
export default Profile;