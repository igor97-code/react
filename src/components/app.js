import React, {Component} from "react";
import Header from './Header.jsx';
import Content from './content/content.jsx';


let App = (props)=>{
    return (
            <div className = 'app-wrapper'>
               <Header/>
               <Content state = {props.store} dispatch = {props.dispatch}/>
            </div>
     );
}


 export default App;
