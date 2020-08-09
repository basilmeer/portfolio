import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import PortfolioItem from './PortfolioItem';
import portfolioList from './portfolioList.json';

const Portfolio = () => (
  <div id='portfolio'>
    <div className='content-container'>
      <div className='page-header text-center'>
        <h2 className='display-4 text-left font-weight-extra-bold'>
          Stuff I've worked <br />
          on lately
        </h2>
      </div>
      <div className='portfolio-tiles mt-5 mb-3'>
        {portfolioList.map((item, index) => {
          if (index < 4)
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
      <Link to='/projects' className='btn button-shadow mt-4 mx-auto'>
        View More Projects
      </Link>
    </div>
  </div>
);

export default Portfolio;
