import React from 'react';

import images from '../../assets/images';
import resume from '../../basilmeer-resume-aug-2024.pdf';

const Welcome = () => {
  return (
    <div className='content-container' id='welcome'>
      <div className='row'>
        <div className='col-12 col-md-8 order-2 order-md-1'>
          <div className='welcome-message'>
            <h1 className='display-4'>
              Hey there!
            </h1>
            <p className='lead'>
              I'm <span className='font-weight-bold'>Basil Meer</span>, a{' '}
              <span className='font-weight-bold'>Full-Stack Engineer &amp; Consultant,</span>{' '}
              and I make stuff using{' '}
              <span className='font-weight-bold'>Ruby on Rails</span>,{' '}
              <span className='font-weight-bold'>React.js</span>,{' '}
              <span className='font-weight-bold'>PostgreSQL</span> &amp;{' '}
              <span className='font-weight-bold'>GraphQL</span>.{' '}
              I also dabble with <span className='font-weight-bold'>DevOps</span> on{' '}
              <span className='font-weight-bold'>AWS</span> and <span className='font-weight-bold'>Heroku</span>.{' '}
              Reach out at{' '}
              <span className='anchor-fancy'>
                <a href='mailto:hello@basilmeer.com' rel='noopener noreferrer'>
                  hello@basilmeer.com
                </a>
              </span>
              {' '} and we can work something out.
            </p>
            <a
              target='_blank'
              href={resume}
              rel='noopener noreferrer'
              className='btn button-shadow mr-2'>
              Download Resume
            </a>
          </div>
        </div>
        <div className='col-12 col-md-4 order-1 order-md-2 text-center text-right'>
          <img src={images.basil} alt='' className='img-fluid img-me' />
        </div>
      </div>
    </div>
  );
};

export default Welcome;
