import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PortfolioItem from './PortfolioItem';
import portfolioList from './portfolioList.json';
import Pagination from '../Pagination';

const Portfolio = ({ defaultItems, showPagination, showMoreLink }) => {
  const [portfolio, setPortfolio] = useState([]);
  const [activePage, setActivePage] = useState(0);
  const numberOfPages = Math.floor(portfolioList.length / defaultItems);

  useEffect(() => {
    /* Iterate over portfolioList and break it up into chunks of 6 */
    const tempArr = [];
    const chunkSize = defaultItems;

    for (let i = 0; i < portfolioList.length; i += chunkSize) {
      const chunk = portfolioList.slice(i, i + chunkSize);
      tempArr.push(chunk);
    }

    setPortfolio(tempArr);
  }, [defaultItems]);

  return (
    <div id='portfolio'>
      <div className='content-container'>
        <div className='page-header text-center'>
          <h2 className='display-4 text-left font-weight-extra-bold'>
            Stuff I've worked <br />
            on lately
          </h2>
        </div>
        <div className='portfolio-tiles mt-5 mb-3'>
          {portfolio.length &&
            portfolio[activePage].map((item, index) => {
              if (index < defaultItems)
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
        {showMoreLink && (
          <Link to='/projects' className='btn button-shadow mt-4 mx-auto'>
            View More Projects
          </Link>
        )}
        {showPagination && (
          <Pagination
            numberOfPages={numberOfPages}
            activePage={activePage}
            setActivePage={setActivePage}
          />
        )}
      </div>
    </div>
  );
};

export default Portfolio;
