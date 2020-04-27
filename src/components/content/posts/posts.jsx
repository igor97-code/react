import React from "react";

let Post = (props)=>{
    console.log();
    return(
        <div>
            <img src={props.img} alt=""/>
            <div className = "posts-info">
                <div className = "posts-name">
                    {props.name}
                </div>
                <div>{props.post}</div>
            </div>
        </div>
            )
}

export default Post