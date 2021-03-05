
import React from 'react';
import './green-btn.css';
import {
    Link
  } from "react-router-dom";

const GreenBtn = (props) => {
    return (
        <Link className="gbtn" to={props.url}>{props.text}</Link>
    );
}

export default GreenBtn;