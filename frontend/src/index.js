import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import storeConfig from './main/reducers';

import App from './main/app';

ReactDOM.render(
  ( <Provider store={storeConfig()}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  ),
  document.getElementById('app')
);
