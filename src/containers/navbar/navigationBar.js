import React from 'react';
import Classes from './navigationBar.css';
import WhiteBtn from '../button/white-btn/white-btn';


const navigationBar = () => {

    return (
        <div className={Classes.container}>
            <WhiteBtn text="About Us"></WhiteBtn>
            <WhiteBtn text="Services"></WhiteBtn>
            <WhiteBtn text="Contact Us"></WhiteBtn> 
        </div>
    );
};

export default navigationBar;