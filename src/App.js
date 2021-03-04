import React, { Component } from 'react';
import './App.css';
import HomePage from '../src/containers/home/Home';
import LandingPage from '../src/containers/landing/landing';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginPage from "./containers/loginPage/LoginPage"


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Logo from './containers/logo/Logo';
import WhiteBtn from './containers/button/white-btn/white-btn';
import RouteLink from './containers/link/link';
import GreenBtn from './containers/button/green-btn/green-btn';



class App extends Component {

  render() {
    return (
      <Router>
      <div className="App">
        <Switch>
          <Route path="/about">
            <div>This is the About Page</div>
          </Route>
          <Route path="/login">
            Login here:
            <LoginPage/>
          </Route>
          <Route path="/books">
            
              <LandingPage/>
            
          </Route>

          <Route path="/">
          
            <HomePage/>
        
          </Route>
        </Switch>
      </div>
      </Router>
    );
  }
}

export default App;
