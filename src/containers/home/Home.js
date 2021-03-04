import React, {Component} from 'react';
import Header from '../header/Header';
import Classes from './Home.css';
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
        <div className={Classes.container}>
            <Header />
            <Wall/>
            <Footer/>
        </div>
    );

}
};

export default HomePage;