import React from 'react';
import PortfolioItem from './PortfolioItem';

function Portfolio() {
  return(
    <div className="mt-5" id="portfolio">
      <div className="page-header text-center">
        <h3>Portfolio</h3>
      </div>
      <div className="portfolio-tiles my-3">
        <PortfolioItem />
        <PortfolioItem />
        <PortfolioItem />
        <PortfolioItem />
        <PortfolioItem />
        <PortfolioItem />
      </div>
      <button className="btn btn-outline-primary mt-4">View All</button>
    </div>
  );
}

export default Portfolio;