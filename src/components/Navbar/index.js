import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

import images from '../../assets/images';

const Navbar = () => (
  <nav class='navbar navbar-expand-lg navbar-light'>
    <a class='brand' href='/'>
      <img src={images.icon} alt='Basil Meer' />
    </a>
    <button
      class='navbar-toggler'
      type='button'
      data-toggle='collapse'
      data-target='#navbarSupportedContent'
      aria-controls='navbarSupportedContent'
      aria-expanded='false'
      aria-label='Toggle navigation'>
      <span class='navbar-toggler-icon'></span>
    </button>

    <div className='collapse navbar-collapse' id='navbarSupportedContent'>
      <ul className='navbar-nav ml-auto'>
        <li className='nav-item'>
          <Link to='/' className='nav-link'>
            About
          </Link>
        </li>
        <li className='nav-item'>
          <Link to='/projects' className='nav-link'>
            Projects
          </Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
