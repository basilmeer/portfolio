import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';

import images from '../../assets/images';

const PortfolioItem = (props) => {
  const { title, content, href } = props;
  const thumbnailName = title.replace(/\s|-/g, '_').toLowerCase();
  return (
    <a href={href} className='portfolio-item' target='_blank'>
      <div className='image'>
        <div className='overlay'></div>
        <img src={images[thumbnailName]} alt={title} />
      </div>
      <div className='content'>
        <h2 className='title'>{title}</h2>
        <p className='description'>{content}</p>
        <p className='view-more'>
          View More
          <FontAwesomeIcon
            icon={faLongArrowAltRight}
            size='sm'
            className='ml-2 view-more-icon'
          />
        </p>
      </div>
    </a>
  );
};

export default PortfolioItem;
