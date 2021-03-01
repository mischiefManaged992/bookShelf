import React, { Component } from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Logo from './components/logo/logo';
import WhiteBtn from './components/button/white-btn/white-btn';
import RouteLink from './components/link/link';
import greenBtn from './components/button/green-btn/green-btn';

class App extends Component {

  render() {
    return (
      <Router>
      <div className="App">
        <div>
          <h1>This is the Links container</h1>
          <div className='links-container'>
          <Link to="/about">About Us</Link>
          <Link to="/books">Books</Link>
          <Link to="/">Landing Page</Link>
          </div>
        </div>
        <Switch>
          <Route path="/about">
            <div>This is the About Page</div>
          </Route>
          <Route path="/books">
            <div>This is the Books Page</div>
          </Route>
          <Route path="/">
            <div>This is the Landing page</div>
          </Route>
        </Switch>
      </div>
      </Router>
    );
  }
}

export default App;
