import React from "react";
import Post from "../posts/posts.jsx";



const Profile = (props)=>{

    let newPostsElement = React.createRef();
    let newposts = () =>{
        let text = newPostsElement.current.value;
        props.addPost(text);
        console.log(props.posts);
    }

   let arrayPosts = props.posts.map((item,key)=>{
        return  <Post key = {key} post = {item.post} name = {item.name} img = {item.img} />
    })
    return(
        <div className = 'content-main'>
            <div className = 'content-main-logo'>
            </div>
            <div className = 'content-main-profile'>
                <div className = "add-posts">
                    <textarea ref = {newPostsElement}></textarea>
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