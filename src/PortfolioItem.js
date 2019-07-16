import React from 'react';

function PortfolioItem(props) {
  let { image, title, content, href } = props;
  return(
    <div className="portfolio-item">
      <span className="image">
        <img src={image} alt={title} />
      </span>
      <a href={href}>
        <h2>{title}</h2>
        <div className="content">
          <p>
            {content}
          </p>
        </div>
      </a>
    </div>
  );
}

export default PortfolioItem;