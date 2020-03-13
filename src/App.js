import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Security, SecureRoute, ImplicitCallback } from '@okta/okta-react';

import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import Staff from './components/pages/Staff';
import Login from './components/auth/Login';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';

import './App.css';

function onAuthRequired({ history }) {
  // history is undefined - whoever is calling this needs to supply history
  history.push('/login');
}

class App extends Component {
  render() {
    return (
      <Router>
        <Security
          issuer="https://dev-240113.okta.com/oauth2/default"
          client_id="0oa384qtp4fYh5sKF4x6"
          redirect_uri={window.location.origin + '/implicit/callback'}
          on_auth_required={onAuthRequired}
        >
          <div className="App">
            <Navbar />
            <Sidebar />
            <div className="container">
              <Route path="/" exact={true} component={Home} />
              <SecureRoute path="/staff" exact={true} component={Staff} />
              <Route
                path="/login"
                render={() => (
                  <Login baseUrl="https://dev-240113.okta.com" />
                )}
              />
              <Route path="/implicit/callback" component={ImplicitCallback} />
            </div>
            <Footer />
          </div>
        </Security>
      </Router>
    );
  }
}

export default App;
