





let messageReduser = (state, action)=>{
    if(action.type == 'addTextMessage'){
        state.Messages.push({
            Message:action.message
        });
        state.PostValue ='';
    }
    else if(action.type == 'addTextPost'){
        state.PostValue = action.value;
    }
    return state;
};

export default messageReduser;
