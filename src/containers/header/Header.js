import React from 'react';
import Logo from '../logo/Logo';
import NavigationBar from '../navbar/navigationBar';
import './Header.css';

const header = (props) => {

    const onClickHandler = () => {
        window.scrollTo(0, 0);
    }

    const classToUse = props.stick == true ? "stick" : "container1"

    return (
        <header className={classToUse}>
            <div className = "container2">
                <Logo className="logo" clickAction={() => onClickHandler()}/>
                <div className="filler"></div>
                <NavigationBar className="navigation"/>
            </div>
        </header>
    );
};

export default header;