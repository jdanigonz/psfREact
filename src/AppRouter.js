import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './App';
import Pagina3 from './Pagina3';

function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/Pagina3" component={Pagina3} />
      </Switch>
    </Router>
  );
}

export default AppRouter;
