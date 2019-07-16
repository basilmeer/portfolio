import React from 'react';

function PortfolioItem(props) {
  let { image, title, content } = props;
  return(
    <div className="portfolio-item">
      <span className="image">
        <img src={ image } alt=""/>
      </span>
      <a href="#">
        <h2>{ title }</h2>
        <div className="content">
          <p>
            { content }
          </p>
        </div>
      </a>
    </div>
  );
}

export default PortfolioItem;