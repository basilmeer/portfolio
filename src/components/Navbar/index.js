import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

import images from '../../assets/images';

const Navbar = ({ darkMode, handleThemeToggle }) => (
  <nav
    className={`navbar navbar-expand-lg navbar-${darkMode ? 'dark' : 'light'}`}>
    <Link to='/' className='brand'>
      <img src={darkMode ? images.icon_dark : images.icon} alt='Basil Meer' />
    </Link>
    <button
      className='navbar-toggler'
      type='button'
      data-toggle='collapse'
      data-target='#navbarSupportedContent'
      aria-controls='navbarSupportedContent'
      aria-expanded='false'
      aria-label='Toggle navigation'>
      <span className='navbar-toggler-icon'></span>
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
        <li className='nav-item d-flex align-items-center'>
          <button onClick={handleThemeToggle} className='theme-toggle'>
            {darkMode ? (
              <FontAwesomeIcon icon={faSun} size='sm' />
            ) : (
              <FontAwesomeIcon icon={faMoon} size='sm' />
            )}
          </button>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
