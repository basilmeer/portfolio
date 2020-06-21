import React from 'react';

import images from '../../assets/images';
import resume from '../../basilmeer-resume-jan-2020.pdf';

const Welcome = () => {
  return (
    <div className='content-container' id='welcome'>
      <div className='row'>
        <div className='col-12 col-md-8 order-2 order-md-1'>
          <div className='welcome-message'>
            <h1 className='display-4'>
              Welcome <span className='bear'>🐻</span>
            </h1>
            <p className='lead'>
              I'm <span className='font-weight-bold'>Basil Meer</span>, a&nbsp;
              <span className='font-weight-bold'>Graphics Designer</span>
              &nbsp;turned&nbsp;
              <span className='font-weight-bold'>Full-Stack Developer</span>
              &nbsp;from <span className='font-weight-bold'>Pakistan</span>. I
              make stuff using&nbsp;
              <span className='font-weight-bold'>React.js</span>,&nbsp;
              <span className='font-weight-bold'>Ruby on Rails</span>,&nbsp;
              <span className='font-weight-bold'>PostgreSQL</span> and&nbsp;
              <span className='font-weight-bold'>Apollo GraphQL</span>. If
              you've got a project that needs some working, and think I'm the
              right guy for the job then hit me up at&nbsp;
              <span className='anchor-fancy'>
                <a href='mailto:hello@basilmeer.com'>hello@basilmeer.com</a>
              </span>
              &nbsp;and maybe we can work something out!
            </p>
            <a target='_blank' href={resume} className='btn button-shadow mr-2'>
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
