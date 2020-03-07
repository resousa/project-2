import React, { Component } from 'react';
import './App.css';
// import Login from './components/Login';
import Dashboard from './components/Dashboard';


class App extends Component {
  render() {
      // const { logins } = this.state
      return (
              <Dashboard name='Admin'/>
      )
  }
}

export default App;
