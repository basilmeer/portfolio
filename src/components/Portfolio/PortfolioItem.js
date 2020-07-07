import React from 'react';

import images from '../../assets/images';

const PortfolioItem = (props) => {
  const { title, content, href } = props;
  const thumbnailName = title.replace(/\s|-/g, '_').toLowerCase();
  return (
    <>
      {/* <div className='portfolio-item'>
        <span className='image'>
          <img src={images[thumbnailName]} alt={title} />
        </span>
        <a href={href} target='_blank'>
          <h2>{title}</h2>
          <div className='content'>
            <p>{content}</p>
          </div>
        </a>
      </div> */}
      <div className='portfolio-item'>
        <span className='image'>
          <img src={images[thumbnailName]} alt={title} />
        </span>
        <a href={href} target='_blank'>
          <div className='content'>
            <h2>{title}</h2>
            <p>{content}</p>
          </div>
        </a>
      </div>
    </>
  );
};

export default PortfolioItem;
