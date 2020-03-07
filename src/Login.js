import React, { Component } from 'react';

class Login extends Component {
  // validateForm = () => {
  //   return email.length > 0 && password.length > 0;
  // };

  // submitForm = () => {
  //   this.props.handleSubmit(this.state);
  //   this.setState(this.initialState);
  // };

  render() {
    // const { email, password } = this.state;

    return (
      <div className='Login'>
        <div class='container'>
          <div class='row justify-content-center'>
            <div class='col-md-6'>
              <form>
                <div class='form-group'>
                  <label for='email'>Email</label>
                  <input type='email' class='form-control' id='email' />
                </div>
                <div class='form-group'>
                  <label for='password'>Password</label>
                  <input type='password' class='form-control' id='password' />
                </div>
                <input
                  class='btn btn-primary'
                  type='button'
                  value='Login'
                  onClick={this.submitForm}
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
