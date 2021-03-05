import React from 'react';
import './Wall.css';
import GreenBtn from '../button/green-btn/green-btn';

const wall = () => {
    return (
        <div className="wallContainer">
            <div className="innercontainer">
                <div className="maintext">
                    <p className="motto"> Bringing back the 
                    <br></br>
                    WORLD of BOOKS.</p>
                </div>
                <div className="loginButton">
                <GreenBtn text="Login" url="/login"></GreenBtn>
                </div>
            </div>
            
        </div>
    );
};

export default wall;