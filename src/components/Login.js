import React, { useState } from 'react';
import './Login.css';

export default function Login(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className='Login'>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-md-4'>
            <div className='card py-4 shadow-sm'>
              <form onSubmit={handleSubmit}>
                <div className='form-group'>
                  <label htmlFor='email'>Email:</label>
                  <input
                    autoFocus
                    type='email'
                    className='form-control'
                    id='email'
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                  />
                </div>
                <div className='form-group'>
                  <label htmlFor='password'>Password:</label>
                  <input
                    type='password'
                    className='form-control'
                    id='password'
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                  />
                </div>
                <input
                  className='btn btn-primary'
                  type='button'
                  value='Login'
                  disabled={!validateForm()}
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
