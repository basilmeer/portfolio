import { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import PortfolioItem from "./PortfolioItem";
import portfolioList from "./portfolioList.json";
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Portfolio = ({ defaultItems, showPagination, darkMode }) => {
  const [portfolio, setPortfolio] = useState([]);
  const [activePage, setActivePage] = useState(0);
  const numberOfPages = Math.ceil(portfolioList.length / defaultItems);

  const changeActivePage = (page) => {
    setActivePage(page);
    // window.scrollTo(0, 0);
  }

  const handlePreviousPage = () => {
    if (activePage > 0) {
      changeActivePage(activePage - 1);
    }
  };

  const handleNextPage = () => {
    if (activePage < numberOfPages - 1) {
      changeActivePage(activePage + 1);
    }
  };

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
    <div id="portfolio" className="pt-[90px] lg:pt-[150px] mb-10 md:mb-32">
      <div className="mb-10 flex items-center justify-between">
        <h2 className="text-left text-4xl font-bold normal-case md:text-6xl">
          Recent Projects
        </h2>
        {showPagination && (
          <div className={`ml-4 flex items-center border ${darkMode ? 'border-white/30' : 'border-black/30'}`}>
            <button
              type="button"
              onClick={handlePreviousPage}
              disabled={activePage === 0}
              className={`border-r px-3 py-2 transition-colors ${
                darkMode
                  ? 'border-white/30 text-white hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-30'
                  : 'border-black/30 text-black hover:bg-black/10 disabled:cursor-not-allowed disabled:opacity-30'
              }`}
              aria-label="Previous projects page"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              type="button"
              onClick={handleNextPage}
              disabled={activePage === numberOfPages - 1}
              className={`px-3 py-2 transition-colors ${
                darkMode
                  ? 'text-white hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-30'
                  : 'text-black hover:bg-black/10 disabled:cursor-not-allowed disabled:opacity-30'
              }`}
              aria-label="Next projects page"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        )}
      </div>
      <div className="mt-5 mb-3 grid min-h-[680px] grid-cols-1 gap-10 lg:grid-cols-2">
        {portfolio.length &&
          portfolio[activePage].map((item, index) => {
            if (index < defaultItems)
              return (
                <PortfolioItem
                  key={index}
                  item={item}
                  darkMode={darkMode}
                />
              );
          })}
      </div>
    </div>
  );
};

export default Portfolio;

Portfolio.propTypes = {
  defaultItems: PropTypes.number.isRequired,
  showPagination: PropTypes.bool.isRequired,
  darkMode: PropTypes.bool.isRequired,
};
