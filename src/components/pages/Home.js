import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withAuth } from '@okta/okta-react';

class Home extends Component {
    state = { authenticated: null };

    checkAuthentication = async () => {
      // const authenticated = await this.props.auth.isAuthenticated(); // this.props.auth is undefined
      const authenticated = true;
      if (authenticated !== this.state.authenticated) {
        this.setState({ authenticated });
      }
    };

    async componentDidMount() {
      this.checkAuthentication();
    }

    async componentDidUpdate() {
      this.checkAuthentication();
    }

    login = async () => {
      this.props.auth.login('/');
    };

    logout = async () => {
      this.props.auth.logout('/');
    };

    render() {
      if (this.state.authenticated === null) return null;

      const mainContent = this.state.authenticated ? (
        <div>
          <p className="lead">
            You have entered the inventory portal,{' '}
            <Link to="/staff">click here</Link>
          </p>
          <button className="btn btn-primary btn-lg" onClick={this.logout}>
            Logout
          </button>
        </div>
      ) : (
          <div>
            <p className="lead">
              To create a new user or to change a password, please reach out to your Manager.
          </p>
            <button className="btn btn-primary btn-lg" onClick={this.login}>
              Login
          </button>
          </div>
        );

      return (
        <div className="jumbotron">
          <h1 className="display-4">Sneaker Inventory</h1>
          {mainContent}
        </div>
      );
    }
  }

export default Home;
