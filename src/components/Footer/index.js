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
              <a href='#'>Back to top</a>
            </li>
            <li>You can also find me here:</li>
            <li>
              <a href='mailto:hello@basilmeer.com'>
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
            </li>
            <li>
              <a href='https://www.linkedin.com/in/basilmeer/'>
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </li>
            <li>
              <a href='https://github.com/basilmeer/'>
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </li>
          </ul>
          <p>
            Copyright 2019 &copy;&nbsp;
            <a href='https://www.basilmeer.com'>Basil Meer</a>. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  </div>
);

export default Footer;
