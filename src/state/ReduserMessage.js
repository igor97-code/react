





let messageReduser = (state, action)=>{
    if(action.type == 'addTextMessage'){
        state.MessageText = action.text;
    }
    else if(action.type == 'addMessage'){
        state.Messages.push(
            {
                message: action.message,
                id:4
            }
        );
    }
    return state;
};

export default messageReduser;
