import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Todo from '../todo/todo';
import About from '../about/about';
import Menu from '../template/menu';

const Routes = () => (
  <BrowserRouter>
    <div className='container'>
    <Menu />

    <Switch>
      <Route path='/todos' component={Todo} />
      <Route path='/about' component={About} />
      <Redirect from='*' to='/todos' />
    </Switch>
    </div>
  </BrowserRouter>
)

export default Routes;
