import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../node_modules/font-awesome/css/font-awesome.css';
import '../template/custom.css';

import React from 'react';
import { BrowserRouter } from 'react-router-dom'

import Routes from './routes';

const App = () => (
  <BrowserRouter>
    <div className='container'>
      <Routes />
    </div>
  </BrowserRouter>
);

export default App;
