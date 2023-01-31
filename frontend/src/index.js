import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import storeConfig from './main/reducers';
import { applyMiddleware } from 'redux';
import promise from 'redux-promise';

import App from './main/app';

const store = applyMiddleware(promise)(storeConfig);

ReactDOM.render(
  ( <Provider store={store()}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  ),
  document.getElementById('app')
);
