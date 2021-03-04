import React from 'react';
import Classes from './Wall.css';


const wall = () => {
    return (
        <div className={Classes.container}>
            <div className={Classes.innercontainer}>
                <div className={Classes.maintext}>
                    <p className={Classes.motto}> Bringing back the 
                    <br></br>
                    WORLD of BOOKS.</p>
                </div>
            </div>
            
        </div>
    );
};

export default wall;