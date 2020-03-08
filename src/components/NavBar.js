import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <nav className='navbar navbar-dark bg-dark fixed-top flex-md-nowrap'>
      <Link className='navbar-brand font-weight-bold' to='/'>
        Sneaker Inventory
      </Link>
    </nav>
  );
}