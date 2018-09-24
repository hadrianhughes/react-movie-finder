import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import Router from './Router';
import reducer from './reducers';

const store = createStore(reducer);

const App = () => (
  <Provider store={store}>
    <Router />
  </Provider>
);

export default App;
