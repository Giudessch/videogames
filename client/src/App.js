import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Page from './pages/Page';


function App() {
  return (
    <div className='app'>
      <Router>
        <Switch>
          <Route path="/"> <LandingPage /> </Route>
          <Route path="/home"> <Page /> </Route>
        </Switch>
      </Router>
    </div>

  );
}

export default App;