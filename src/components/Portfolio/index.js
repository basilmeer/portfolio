import React from 'react';
import PortfolioItem from './PortfolioItem';
import portfolioList from './portfolioList.json';

const Portfolio = () => (
  <div className='content-container' id='portfolio'>
    <div id='portfolio'>
      <div className='page-header text-center'>
        <h3 className='heading'>Portfolio</h3>
      </div>
      <p className='lead'>
        Here are a few projects I've worked on recently. Want to see more?&nbsp;
        <span className='anchor-fancy'>
          <a href='mailto:hello@basilmeer.com'>Hit me up!</a>
        </span>
      </p>
      <div className='portfolio-tiles mt-5 mb-3'>
        {portfolioList.map((item, index) => {
          if (index < 6)
            return (
              <PortfolioItem
                key={index}
                title={item.title}
                image={item.image}
                content={item.content}
                href={item.href}
              />
            );
        })}
      </div>
      <button type='button' className='btn button-shadow mt-4 mx-auto'>
        View More Projects
      </button>
    </div>
  </div>
);

export default Portfolio;
