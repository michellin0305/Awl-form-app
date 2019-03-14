import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import LandingPage from './Components/LandingPage/LandingPage';
import SignUp from './Components/SignUp/SignUp'
import Login from './Components/Login/Login'
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={LandingPage}/>
          <Route exact path="/signup" component={SignUp}/>
          <Route exact path="/login" component={Login}/>
        </div>
      </Router>
    );
  }
}

export default App;
