import React, { Component } from 'react';
import './Login.css';

import { Link } from 'react-router-dom';
class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: ``,
      password: ``,
      error: ``
    };

    this.handlePassChange = this.handlePassChange.bind(this);
    this.handleUserChange = this.handleUserChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.dismissError = this.dismissError.bind(this);
  }

  dismissError() {
    this.setState({ error: `` });
  }

  handleSubmit(event) {
    event.preventDefault();

    const userData = {
      username: this.state.username,
      password: this.state.password
    };
    this.props.loginUser(userData);

    //   if(!this.state.username) {
    //       return this.setState({ error: 'Username is required' });
    //   }

    //   if(!this.state.password) {
    //       return this.setState({ error: 'Password is required' });
    //   }

    //   return this.setState({ error: '' });
  }

  handleUserChange(event) {
    this.setState({
      username: event.target.value
    });
  }

  handlePassChange(event) {
    this.setState({
      password: event.target.value
    });
  }

  render() {
    return (
      <div className='container login-container'>
        <div className='row'>
          <div className='col-md-6 login-form-1'>
            <h3>Login</h3>
            <form onSubmit={this.handleSubmit} method='post'>
              <div className='form-group'>
                <input
                  type='text'
                  className='form-control'
                  name='username'
                  placeholder='Username'
                  value={this.state.username}
                  onChange={this.handleUserChange}
                />
              </div>
              <div className='form-group'>
                <input
                  type='password'
                  className='form-control'
                  name='password'
                  placeholder='Password'
                  value={this.state.password}
                  onChange={this.handlePassChange}
                />
              </div>
              <div className='form-group text-center'>
                <input
                  type='submit'
                  className='btnSubmit'
                  value='Login Now'
                />
              </div>
              <div className='form-group'>
                  Forgot password?{` `}
                <a href='http://www.google.com' className='ForgetPwd'>
                    Click here
                </a>
              </div>
              <div className='form-group'>
                  Not a member yet?{` `}
                <Link className='ForgetPwd' to='/register'>Sign up</Link>
              </div>
            </form>
          </div>
          <div className='col-md-6'>
            <img
              src={require(`./assets/images/login-pic.jpg`)}
              width='360px'
              height='475px'
              alt='login-pic'
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
