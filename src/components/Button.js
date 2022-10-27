import React from "react";
import "../styles/Button.scss";

function Button(props){
    return(
        <button className="custom-btn btn1" type={props.type} onClick={props.onClick} ><span>{props.content}</span></button>
    )
}

export default Button;