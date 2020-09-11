import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => (
  <div className='content-container'>
    <footer id='footer'>
      <div className='row'>
        <div className='col-lg-12'>
          <ul className='list-unstyled'>
            <li className='float-right'>
              <button className='scroll-top-btn'>Back to top</button>
            </li>
            <li>You can also find me here:</li>
            <li>
              <a href='mailto:hello@basilmeer.com' rel='noopener noreferrer'>
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
            </li>
            <li>
              <a
                href='https://www.linkedin.com/in/basilmeer/'
                rel='noopener noreferrer'>
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </li>
            <li>
              <a href='https://github.com/basilmeer/' rel='noopener noreferrer'>
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </li>
          </ul>
          <p>
            Copyright {new Date().getFullYear()} &copy;&nbsp;
            <a href='https://www.basilmeer.com' rel='noopener noreferrer'>
              Basil Meer
            </a>
            . All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  </div>
);

export default Footer;
