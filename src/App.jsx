import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Offer from './pages/Offer';

function App() {
  return (
    <Switch>
      <Route component={Home} exact path="/" />
      <Route component={Offer} exact path="/offers" />
    </Switch>
  );
}

export default App;
