


let InfoDialogs =  {
    Dialogs: [
        {name: 'Дмитрий', id: 1},
        {name: 'Вявеслав', id: 2},
        {name: 'Екатерина', id: 3},
        {name: 'Александа', id: 4}
    ],
        infoMessages: {
        Messages: [
            {message: 'hello hello', id: "1"},
            {message: 'Testtest', id: "2"},
            {message: 'test message', id: "3"}],
            MessageText: '',
    }
};



let messageReduser = (state =InfoDialogs, action)=>{
    if(action.type == 'addTextMessage'){
        state.infoMessages.MessageText = action.text;
    }
    else if(action.type == 'addMessage'){
        state.infoMessages.Messages.push(
            {
                message: action.message,
                id:4
            }
        );
        state.infoMessages.MessageText = "";
    }
    return state;
};

export default messageReduser;
