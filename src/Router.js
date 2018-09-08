import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import MainPage from './components/MainPage';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={MainPage} />
    </Switch>
  </BrowserRouter>
);

export default App;
