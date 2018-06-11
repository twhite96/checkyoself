import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from '../App';
import NotFound from './NotFound';
import Text from './Text';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App}/>
      <Route path="/text" component={Text}/>
      <Route component={NotFound}/>
    </Switch>
  </BrowserRouter>
);

export default Router;
