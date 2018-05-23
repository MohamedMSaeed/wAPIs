import React, { Component } from 'react';

import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ListTasksPage from './components/tasks/ListTasksPage'

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path='/' component={ListTasksPage} />
        </Switch>
      </Router>
    );
  }
}

export default App;
