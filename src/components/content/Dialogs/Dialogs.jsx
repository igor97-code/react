import React from "react";
import {Link} from "react-router-dom";

let DialogsPeoples = ({dialogs}) =>{
    return(
        <div className="Dialogs-people-name">
            <Link to = {`/Dialogs/${dialogs.id}`}>{dialogs.name}</Link>
        </div>
    )
}
let MessageItem = ({message}) =>{
    return(
        <div className='dialogs-message-item'>
            {message.message}
        </div>
    )
}




let Dialogs = (props)=>{
    let arrayDialogs = props.dialogs
        .map( (dialog,key)=> <DialogsPeoples key = {key} dialogs ={dialog}/>)

    let arrayMessages = props.messages
        .map( (message,key) => <MessageItem key = {key} message = {message}/> )
    return(
        <div className="Dialogs-wrapper">
            <div className="Dialogs-people">
                {arrayDialogs}
            </div>
            <div className="Dialogs-messages">
                {arrayMessages}
            </div>
        </div>
    )
}

export default Dialogs;