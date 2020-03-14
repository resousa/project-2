import React from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom';
import Routes from './Routes';

export default function Sidebar() {
  return (
      <div className='Sidebar'>
        <div className='container-fluid justify-content-between d-flex flex-column content-wrapper'>
          <div className='row'>
            <nav className='col-md-2 d-none d-md-block bg-light sidebar'>
              <div className='sidebar-sticky'>
                <ul className='nav flex-column'>
                  <li className='nav-item'>
                    <Link className='nav-link' to='/home'>
                      <i className='fas fa-home fa-fw'></i>Dashboard
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link className='nav-link' to='/orders'>
                      <i className='fas fa-file-invoice-dollar fa-fw'></i>Orders
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link className='nav-link' to='/shoes'>
                      <i class='fas fa-shoe-prints fa-fw'></i>Shoes
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link className='nav-link' to='/suppliers'>
                      <i class='fas fa-truck-loading fa-fw'></i>Suppliers
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link className='nav-link' to='/vendors'>
                      <i class='fas fa-user-tag fa-fw'></i>Vendors
                    </Link>
                  </li>
                  <hr className='sidebar-divider'></hr>
                  <li className='nav-item'>
                    <Link className='nav-link' to='/admin'>
                      <i className='fas fa-users-cog fa-fw'></i>Admin
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link className='nav-link' to='/reports'>
                      <i className='fas fa-file-alt fa-fw'></i>Reports
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
            <main role='main' className='col-md-9 ml-sm-auto col-lg-10 px-4'>
              <Routes />
            </main>
          </div>
        </div>
      </div>
  );
}
