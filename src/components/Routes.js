import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import Orders from './Orders';
import Shoes from './Shoes';
import Suppliers from './Suppliers';
import Vendors from './Vendors';
import Admin from './Admin';
import Reports from './Reports';

export default function Routes() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/home' component={Home} />
        <Route path='/orders' component={Orders} />
        <Route path='/shoes' component={Shoes} />
        <Route path='/suppliers' component={Suppliers} />
        <Route path='/vendors' component={Vendors} />
        <Route path='/admin' component={Admin} />
        <Route path='/reports' component={Reports} />
      </Switch>
    </div>
  );
}
