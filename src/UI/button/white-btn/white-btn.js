import React from "react";
import classes from "./white-btn.css";

const whiteBtn = (props) => {
    return (
        <button className={classes.wbtn}>{props.text}</button>
    );
}

export default whiteBtn;