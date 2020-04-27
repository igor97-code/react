import React from 'react';
import {BrowserRouter,Route} from "react-router-dom";
import NavBar from "./navbar.jsx";
import Profile from "./profile/profile.jsx";
import Dialogs from "./Dialogs/Dialogs.jsx";




const Content = (props)=>{
    return(
        <BrowserRouter>
            <section>
                <div className= 'container'>
                    <div className = 'content-wrapper'>
                        <NavBar/>
                        <Route path ='/Profile' render = { ()=>{
                           return <Profile posts = {props.state.posts} addPost = {props.addPost}/>}
                        }/>
                       <Route path ='/Dialogs' render= {()=>{
                      return   <Dialogs dialogs = {props.state.Dialogs} messages = {state.Messages} />}}/>
                    </div>
                </div>
            </section>
          </BrowserRouter>
    )
}
export default Content;