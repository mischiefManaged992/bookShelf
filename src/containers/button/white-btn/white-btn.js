import React from "react";
import "./white-btn.css";

const whiteBtn = (props) => {
    return (
        <button className="wbtn">{props.text}</button>
    );
}

export default whiteBtn;