import React, { Component } from 'react';
import './App.css';
import HomePage from '../src/containers/home/Home';

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";
import Logo from './containers/logo/Logo';
import WhiteBtn from './containers/button/white-btn/white-btn';
import RouteLink from './containers/link/link';
import GreenBtn from './containers/button/green-btn/green-btn';


class App extends Component {

  render() {
    return (
      // <Router>
      // <div className="App">
      //   <div>
      //     <h1>This is the Links container</h1>
      //     <div className='links-container'>
      //     <GreenBtn text="Search"></GreenBtn>
          
      //     <Link to="/about">About Us</Link>
      //     <Link to="/books">Books</Link>
      //     <Link to="/">Landing Page</Link>
      //     </div>
      //   </div>
      //   <Switch>
      //     <Route path="/about">
      //       <div>This is the About Page</div>
      //     </Route>
      //     <Route path="/books">
      //       <div>This is the Books Page</div>
      //     </Route>
      //     <Route path="/">
      //       <div>This is the Landing page</div>
      //     </Route>
      //   </Switch>
      // </div>
      // </Router>
      <div className="App">
        <HomePage/>

      </div>
    );
  }
}

export default App;
