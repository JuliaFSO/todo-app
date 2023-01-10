import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../node_modules/font-awesome/css/font-awesome.css';

import React from 'react';
import { BrowserRouter } from 'react-router-dom'

import Routes from './routes';
import Menu from '../template/menu';

const App = () => (
  <BrowserRouter>
    <div className="container">
      <Menu />
      <Routes />
    </div>
  </BrowserRouter>
);

export default App;
