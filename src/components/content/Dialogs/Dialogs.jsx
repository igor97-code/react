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
    let newMEssageValue = React.createRef();
    let TextMessage = ()=>{
        props.dispatch({
            type:'addTextMessage',
            text: newMEssageValue.current.value
        });
    }
    let addMessage = () => {
        props.dispatch({
            type:'addMessage',
            message:newMEssageValue.current.value,
        });
    }
    let arrayDialogs = props.dialogs
        .map( (dialog,key)=> <DialogsPeoples key = {key} dialogs ={dialog}/>)

    let arrayMessages = props.infoMessages.Messages
        .map( (message,key) => <MessageItem key = {key} message = {message}/> )
    return(
        <div className="Dialogs-wrapper">
            <div className ="wrapper-messages">
                <div className="Dialogs-people">
                    {arrayDialogs}
                </div>
                <div className="Dialogs-messages">
                    {arrayMessages}
                </div>
            </div>
            <div className ="Send-messages">
                <textarea ref = {newMEssageValue}  onChange = {TextMessage} value = {props.infoMessages.MessageText}/>
                <button onClick = {addMessage} >Отправить сообщение</button>
            </div>
        </div>
    )
}

export default Dialogs;