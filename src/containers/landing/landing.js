import React from 'react';
import classes from './landing.css';

import Header from '../header/Header';
import Footer from '../footer/Footer';

const LandingPage = () => {
    return (
        <div>
        <Header/>
        
        <div className={classes.landingPageContainer}>
            {/* The book tile will go here */}
            <h1>This is the books page</h1>
            <div className="book-tile">
                This is a tile
            </div>

            <div className="book-tile">
                This is a tile
            </div>

            <div className="book-tile">
                This is a tile
            </div>
        </div>
        <Footer/>
        </div>
    )
}

export default LandingPage;