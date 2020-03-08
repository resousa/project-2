import React from 'react';
import './Admin.css';

export default function Admin() {
  return (
    <div className='Admin'>
      <div className='container login-container'>
        <div className='row'>
          <div className='col-md-6 login-form-2'>
            <h3>New User Registration</h3>
            <form action='/register' method='post'>
              <div className='form-group'>
                <input
                  type='text'
                  className='form-control'
                  name='username'
                  placeholder='Username'
                  value=''
                />
              </div>
              <div className='form-group'>
                <input
                  type='text'
                  className='form-control'
                  name='fullname'
                  placeholder='Full name'
                  value=''
                />
              </div>
              <div className='form-group'>
                <input
                  type='password'
                  className='form-control'
                  name='password'
                  placeholder='Password'
                  value=''
                />
              </div>
              <div className='form-group'>
                <input
                  type='password'
                  className='form-control'
                  name='confirm-password'
                  placeholder='Confirm password'
                  value=''
                />
              </div>
              <div className='form-group text-center'>
                <input
                  type='submit'
                  className='btnSubmit'
                  action='/login'
                  value='Create'
                />
              </div>
            </form>
          </div>
          <div className='col-md-6'>
            <img
              src={require('../assets/images/register-pic.jpg')}
              width='360px'
              height='475px'
              alt='register-pic'
            />
          </div>
        </div>
      </div>
    </div>
  );
}
