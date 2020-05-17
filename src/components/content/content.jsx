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
                           return <Profile postValue = {props.state.InfoPosts.PostValue}
                                           posts = {props.state.InfoPosts.posts}
                                           dispatch = {props.dispatch.bind(props.state)}
                                            />}
                        }/>
                       <Route path ='/Dialogs' render= {()=>{
                      return   <Dialogs dialogs = {props.state.InfoDialogs.Dialogs}
                                        infoMessages = {props.state.InfoDialogs.infoMessages}
                                        dispatch = {props.dispatch.bind(props.state)}/>}}/>
                    </div>
                </div>
            </section>
          </BrowserRouter>
    )
}
export default Content;