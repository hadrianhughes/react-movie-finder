import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import MainPage from './components/MainPage';
import MoviePage from './containers/MoviePage';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={MainPage} />
      <Route path="/movie/:id" component={MoviePage} />
    </Switch>
  </BrowserRouter>
);

export default Router;
