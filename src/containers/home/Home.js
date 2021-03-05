import React, {Component} from 'react';
import Header from '../header/Header';
import './Home.css';
import Wall from '../wall/Wall';
import Footer from '../footer/Footer';

class HomePage extends Component {
//      
// constructor(props) {
//     super(props);
//     this.state = {
//             enableSticky: false
//     };
// }

// scrollHandler = () => {
//     if (window.pageYOffset > 180 && !this.state.enableSticky) {
//             this.setState(this.state = {
//                     enableSticky: true
//             })
//     }
//     else if (window.pageYOffset <= 180 && this.state.enableSticky) {
//             this.setState(this.state = {
//                     enableSticky: false
//             })
//             console.log(window.pageYOffset);
//     }
// }

// componentDidMount() {
//     window.addEventListener('scroll', this.scrollHandler, false);
// }

// componentWillUnmount() {
//     window.removeEventListener('scroll', this.scrollHandler);
// }


render() {
    return (
        <div className="container col-lg-12 col-md-12 col-sm-12 homepage-container">
            <Header />
            <Wall/>
            <Footer/>
        </div>
    );

}
};

export default HomePage;