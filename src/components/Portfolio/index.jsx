import { useState, useEffect } from "react";
import PortfolioItem from "./PortfolioItem";
import portfolioList from "./portfolioList.json";
import Pagination from "../Pagination";

const Portfolio = ({ defaultItems, showPagination, darkMode }) => {
  const [portfolio, setPortfolio] = useState([]);
  const [activePage, setActivePage] = useState(0);
  const numberOfPages = Math.ceil(portfolioList.length / defaultItems);

  const changeActivePage = (page) => {
    setActivePage(page);
    // window.scrollTo(0, 0);
  }

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
      <div className="page-header text-center">
        <h2 className="text-4xl md:text-6xl font-bold mb-10 normal-case text-left">
          Recent projects
        </h2>
      </div>
      <div className="portfolio-tiles !grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-10 mt-5 mb-3">
        {portfolio.length &&
          portfolio[activePage].map((item, index) => {
            if (index < defaultItems)
              return (
                <PortfolioItem
                  key={index}
                  item={item}
                />
              );
          })}
      </div>
      {showPagination && (
        <Pagination
          numberOfPages={numberOfPages}
          activePage={activePage}
          setActivePage={changeActivePage}
          darkMode={darkMode}
        />
      )}
    </div>
  );
};

export default Portfolio;
