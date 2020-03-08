import React, { Component } from 'react';
// import { Route } from 'react-router-dom';

import './App.css';
// import NavBar from './components/NavBar';
// import Login from './Login';
// import Register from './Register';
import Dashboard from './components/Dashboard';
class App extends Component {
  render() {
    return (
      <div>
        {/* <NavBar />
        <Route exact path='/' component={ Login } />
        <Route exact path='/register' component={ Register } /> */}
        <Dashboard />
      </div>
    );
  }
}

export default App;
