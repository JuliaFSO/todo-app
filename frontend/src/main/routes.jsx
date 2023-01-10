import React from "react";
import { Redirect } from 'react-router'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Todo from "../todo/todo";
import About from "../about/about";

const Routes = () => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route path="./todos" class={<Todo />} />
        <Route path="./about" function={<About />} />
      </Switch>
      <Redirect from="*" to="/todos" />
    </div>
  </BrowserRouter>
)

export default Routes;
