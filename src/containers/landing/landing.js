import React from 'react';
import './landing.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from '../header/Header';
import Footer from '../footer/Footer';

const tileData = [{
    title: "Harry Potter and the Philosopher's Stone",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    imgUrl: "https://cdn.pixabay.com/photo/2018/03/30/15/11/deer-3275594_960_720.jpg"
},{
    title: "Harry Potter and the Chamber of Secrets",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    imgUrl: "https://cdn.pixabay.com/photo/2018/04/09/19/55/low-poly-3305284_960_720.jpg"
},{
    title: "Harry Potter and the Prisoner of Azkaban",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    imgUrl: "https://cdn.pixabay.com/photo/2018/04/06/13/46/poly-3295856_960_720.png"
},{
    title: "Harry Potter and the Philosopher's Stone",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    imgUrl: "https://cdn.pixabay.com/photo/2018/03/30/15/11/deer-3275594_960_720.jpg"
},{
    title: "Harry Potter and the Chamber of Secrets",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    imgUrl: "https://cdn.pixabay.com/photo/2018/04/09/19/55/low-poly-3305284_960_720.jpg"
},{
    title: "Harry Potter and the Prisoner of Azkaban",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    imgUrl: "https://cdn.pixabay.com/photo/2018/04/06/13/46/poly-3295856_960_720.png"
},];

const TileContainer = props => {
    const data = props.props;
    return(
        <div className="col-xs-12 col-sm-12 col-md-9 col-lg-12">
            <a href="">
                <div className="card-flyer">
                    <div className="text-box">
                        <div className="image-box col-md-2 col-lg-2 col-sm-12">
                            <img src={data.imgUrl} alt="" />
                        </div>
                        <div className="text-container col-md-10 col-lg-10 col-sm-12">
                        <h6>{data.title}</h6>
                            <p>{data.description}</p>
                        </div>
                    </div>
                </div>
            </a>
        </div>
    )
}

const LandingPage = (props) => {
    const data = tileData;
    return (
    <div>
        <Header/>
        
        <div className="landingPageContainer">
            {/* The book tile will go here */}
            <h1>Latest Posts</h1>
            <div id="cards_landscape_wrap-2">
                <div className="containerMain">
                    {/* <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-9 col-lg-12">
                            <a href="">
                                <div className="card-flyer">
                                    <div className="text-box">
                                        <div className="image-box col-md-2 col-lg-2 col-sm-12">
                                            <img src="https://cdn.pixabay.com/photo/2018/03/30/15/11/deer-3275594_960_720.jpg" alt="" />
                                        </div>
                                        <div className="text-container col-md-10 col-lg-10 col-sm-12">
                                        <h6>Title 01</h6>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-9 col-lg-12">
                            <a href="">
                                <div className="card-flyer">
                                    <div className="text-box">
                                        <div className="image-box col-md-2 col-lg-2 col-sm-12">
                                            <img src="https://cdn.pixabay.com/photo/2018/04/09/19/55/low-poly-3305284_960_720.jpg" alt="" />
                                        </div>
                                        <div className="text-container col-md-10 col-lg-10 col-sm-12">                                    
                                            <h6>Title 02</h6>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-9 col-lg-12">
                            <a href="">
                                <div className="card-flyer">
                                    <div className="text-box">
                                        <div className="image-box col-md-2 col-lg-2 col-sm-12">
                                            <img src="https://cdn.pixabay.com/photo/2018/04/06/13/46/poly-3295856_960_720.png" alt="" />
                                        </div>

                                        <div className="text-container col-md-10 col-lg-10 col-sm-12">
                                            <h6>Title 03</h6>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div> */}

                    <div class="row">
                        {
                            data.map(item => {
                                return <TileContainer props={item}/>
                            })
                        }
                        
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
    )
}

export default LandingPage;