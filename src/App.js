import React, { Component } from 'react';
import Home from './Components/Home';
import './App.css';


import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
        <Router>
      <Switch>
          <Route exact path="/" component={Home} />
      </Switch>
        </Router>
    );
  }
}

export default App;
