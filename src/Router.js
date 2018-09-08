import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import MainPage from './components/MainPage';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={MainPage} />
    </Switch>
  </BrowserRouter>
);

export default Router;
