import React from 'react';
import ReactDOM from 'react-dom';
// Step 1. Import react-router functions
import Home from './components/Home'
import About from './components/About'
import Login from './components/Login'
import Signup from './components/Signup'
import Messages from './components/Messages'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Route, Switch, Link, NavLink } from 'react-router-dom';

// Step 2. Changed to have router coordinate what is displayed
ReactDOM.render((
  <Router>
    <div>
      <Navbar/>
        <Switch>
          {/* <Route exact path="/" component={Home} /> */}
          {/* <Route exact path="/signup" render={() => <h1>Signup!</h1>} /> */}
          <Route exact path="/" component={Home} />
          <Route exact path="/messages" component={Messages} />
          <Route exact path="/about" component={About} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          
        </Switch>
    </div>
  </Router>),
  document.getElementById('root')
);
