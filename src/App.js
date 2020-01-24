import React, { Component } from 'react';
import Home from './Components/Home';
import Experience from './Components/Experience';
import './App.css';


import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Projects from "./Components/Projects";

class App extends Component {
  render() {
    return (
        <Router>
      <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Experience" component={Experience}/>
          <Route exact path={'/Projects'} component={Projects}/>
      </Switch>
        </Router>
    );
  }
}

export default App;
