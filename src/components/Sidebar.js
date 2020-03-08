import React from 'react';
import './Sidebar.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './Home';
import Orders from './Orders';
import Products from './Products';
import Customers from './Customers';
import Reports from './Reports';
import Admin from './Admin';

export default function Sidebar() {
  return (
    <Router>
      <div className='Sidebar'>
        <div className='container-fluid justify-content-between d-flex flex-column content-wrapper'>
          <div className='row'>
            <nav className='col-md-2 d-none d-md-block bg-light sidebar'>
              <div className='sidebar-sticky'>
                <ul className='nav flex-column'>
                  <li className='nav-item'>
                    <Link className='nav-link' to='/home'>
                      <i className='fas fa-home fa-fw'></i> Dashboard
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link className='nav-link' to='/orders'>
                      <i className='fas fa-file-invoice-dollar fa-fw'></i>{' '}
                      Orders
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link className='nav-link' to='/products'>
                      <i className='fas fa-shoe-prints fa-fw'></i> Products
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link className='nav-link' to='/customers'>
                      <i className='fas fa-id-card fa-fw'></i> Customers
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link className='nav-link' to='/reports'>
                      <i className='fas fa-file-alt fa-fw'></i> Reports
                    </Link>
                  </li>
                  <hr className='sidebar-divider'></hr>
                  <li className='nav-item'>
                    <Link className='nav-link' to='/admin'>
                      <i className='fas fa-users-cog'></i> Admin
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
            <main role='main' className='col-md-9 ml-sm-auto col-lg-10 px-4'>
              <Route path='/home' component={Home}/>
              <Route path='/orders' component={Orders}/>
              <Route path='/products' component={Products}/>
              <Route path='/customers' component={Customers}/>
              <Route path='/reports' component={Reports}/>
              <Route path='/admin' component={Admin}/>
            </main>
          </div>
        </div>
      </div>
    </Router>
  );
}
