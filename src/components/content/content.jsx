import React from 'react';
import {BrowserRouter,Route} from "react-router-dom";
import NavBar from "./navbar.jsx";
import Profile from "./profile/profile.jsx";
import Dialogs from "./Dialogs/Dialogs.jsx";




const Content = (props)=>{
    console.log(props);
    return(
        <BrowserRouter>
            <section>
                <div className= 'container'>
                    <div className = 'content-wrapper'>
                        <NavBar/>
                        <Route path ='/Profile' render = { ()=>{
                           return <Profile postValue = {props.state._state.InfoPosts.PostValue}
                                           posts = {props.state._state.InfoPosts.posts}
                                           addPost = {props.state.addPost}
                                           addPostValue = {props.state.addPostValue.bind(props.state)} />}
                        }/>
                       <Route path ='/Dialogs' render= {()=>{
                      return   <Dialogs dialogs = {props.state._state.Dialogs} messages = {props.state._state.Messages} />}}/>
                    </div>
                </div>
            </section>
          </BrowserRouter>
    )
}
export default Content;