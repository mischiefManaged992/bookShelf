import React from 'react';
import Classes from './landing.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from '../header/Header';
import Footer from '../footer/Footer';

const LandingPage = (props) => {
    return (
    <div>
        <Header/>
        
        <div className={Classes.landingPageContainer}>
            {/* The book tile will go here */}
            <h1>This is the books page</h1>
            <div id="cards_landscape_wrap-2">
                <div className="containerMain">
                    <div className="row">
                        <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                            <a href="">
                                <div className="card-flyer">
                                    <div className="text-box">
                                        <div className="image-box">
                                            <img src="https://cdn.pixabay.com/photo/2018/03/30/15/11/deer-3275594_960_720.jpg" alt="" />
                                        </div>
                                        <div className="text-container">
                                        <h6>Title 01</h6>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                            <a href="">
                                <div className="card-flyer">
                                    <div className="text-box">
                                        <div className="image-box">
                                            <img src="https://cdn.pixabay.com/photo/2018/04/09/19/55/low-poly-3305284_960_720.jpg" alt="" />
                                        </div>
                                        <div className="text-container">                                    
                                            <h6>Title 02</h6>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                            <a href="">
                                <div className="card-flyer">
                                    <div className="text-box">
                                        <div className="image-box">
                                            <img src="https://cdn.pixabay.com/photo/2018/04/06/13/46/poly-3295856_960_720.png" alt="" />
                                        </div>

                                        <div className="text-container">
                                            <h6>Title 03</h6>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
    )
}

export default LandingPage;