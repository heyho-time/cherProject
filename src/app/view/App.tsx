import React from 'react';
import test from './test'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App: React.FC = () => {
  return (
  <Router>
  <Switch>
    <Route exact path="/" component={test} />
  </Switch>
  </Router>
  )
};

export default App;
