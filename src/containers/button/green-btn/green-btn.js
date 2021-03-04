
import React from 'react';
import classes from './green-btn.css';


const GreenBtn = (props) => {
    return (
        <button className={classes.gbtn}>{props.text}</button>
    );
}

export default GreenBtn;