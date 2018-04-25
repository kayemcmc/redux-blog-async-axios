import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => (
  <nav className='navbar navbar-expand-lg my-4'>
    <h1 className='navbar-brand mb-0'>My app</h1>
    <div className='collapse navbar-collapse'>
      <ul className='navbar-nav mr-auto'>
        <li className='nav-item'>
          <Link to={`/home`} className='nav-link'>Home</Link>
        </li>
        <li className='nav-item'>
          <Link to={`/about`} className='nav-link'>About</Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navigation;
