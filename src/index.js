import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter , Route, Router , Switch  } from 'react-router-dom';
import { configureStore } from './store';
import routes from './routes';

ReactDOM.render(
  <Provider store={configureStore(window.__INITIAL_STATE__)}>
    <BrowserRouter>
      {routes}
    </BrowserRouter>
  </Provider>
  , document.getElementById('root'));
