import React from "react";
import "../styles/Button.scss";

const ButtonComponent = (props) => {
    return <div className="button-container">
        <button onClick={props.clickHandler}>{props.text}</button>
    </div>
}

export default ButtonComponent;