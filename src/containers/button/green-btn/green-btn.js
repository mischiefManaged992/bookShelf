
import React from 'react';
import './green-btn.css';


const GreenBtn = (props) => {
    return (
        <button className="gbtn">{props.text}</button>
    );
}

export default GreenBtn;