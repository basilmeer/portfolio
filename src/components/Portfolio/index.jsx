import { useState } from "react";
import PropTypes from 'prop-types';
import PortfolioItem from "./PortfolioItem";
import portfolioList from "./portfolioList.json";
import { ChevronLeft, ChevronRight } from 'lucide-react';

const categories = ["All", ...new Set(portfolioList.map((item) => item.category))];

const Portfolio = ({ defaultItems, showPagination, darkMode }) => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activePage, setActivePage] = useState(0);
  const filteredProjects = portfolioList.filter(
    (item) => activeCategory === "All" || item.category === activeCategory
  );
  const numberOfPages = Math.ceil(filteredProjects.length / defaultItems);
  const visibleProjects = filteredProjects.slice(
    activePage * defaultItems,
    (activePage + 1) * defaultItems
  );

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setActivePage(0);
  };

  const handlePreviousPage = () => {
    setActivePage((page) => Math.max(0, page - 1));
  };

  const handleNextPage = () => {
    setActivePage((page) => Math.min(numberOfPages - 1, page + 1));
  };

  return (
    <div id="portfolio" className="pt-[90px] lg:pt-[150px] mb-10 md:mb-32">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <h2 className="text-left text-4xl font-bold normal-case md:text-6xl">
          Recent Projects
        </h2>
        {showPagination && (
          <nav aria-label="Project pagination" className={`flex shrink-0 items-center border ${darkMode ? 'border-white/30' : 'border-black/30'}`}>
            <button
              type="button"
              onClick={handlePreviousPage}
              disabled={activePage === 0}
              className={`flex h-11 w-11 shrink-0 touch-manipulation items-center justify-center border-r transition-colors focus-visible:relative focus-visible:z-10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
                darkMode
                  ? 'border-white/30 text-white hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-30'
                  : 'border-black/30 text-black hover:bg-black/10 disabled:cursor-not-allowed disabled:opacity-30'
              }`}
              aria-controls="project-results"
              aria-label="Previous projects page"
            >
              <ChevronLeft size={18} aria-hidden="true" className="pointer-events-none" />
            </button>
            <button
              type="button"
              onClick={handleNextPage}
              disabled={activePage >= numberOfPages - 1}
              className={`flex h-11 w-11 shrink-0 touch-manipulation items-center justify-center transition-colors focus-visible:relative focus-visible:z-10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
                darkMode
                  ? 'text-white hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-30'
                  : 'text-black hover:bg-black/10 disabled:cursor-not-allowed disabled:opacity-30'
              }`}
              aria-controls="project-results"
              aria-label="Next projects page"
            >
              <ChevronRight size={18} aria-hidden="true" className="pointer-events-none" />
            </button>
          </nav>
        )}
      </div>
      <div className="mb-6 flex flex-wrap gap-2" role="group" aria-label="Filter projects by category">
        {categories.map((category) => {
          const selected = activeCategory === category;
          const count = category === "All"
            ? portfolioList.length
            : portfolioList.filter((item) => item.category === category).length;

          return (
            <button
              key={category}
              type="button"
              aria-pressed={selected}
              aria-controls="project-results"
              onClick={() => handleCategoryChange(category)}
              className={`border px-3 py-2 text-sm transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 ${
                darkMode
                  ? selected
                    ? 'border-white bg-white text-black'
                    : 'border-white/30 hover:bg-white/10'
                  : selected
                    ? 'border-black bg-black text-white'
                    : 'border-black/30 hover:bg-black/10'
              }`}
            >
              {category} <span className="ml-1 opacity-60">{count}</span>
            </button>
          );
        })}
      </div>
      <p className="mb-5 text-sm opacity-70" role="status" aria-live="polite" aria-atomic="true">
        {filteredProjects.length} projects{activeCategory !== "All" && ` in ${activeCategory}`}
        {showPagination && numberOfPages > 1 && ` · Page ${activePage + 1} of ${numberOfPages}`}
      </p>
      <div id="project-results" className="mt-5 mb-3 grid min-h-[680px] grid-cols-1 gap-10 lg:grid-cols-2">
        {visibleProjects.map((item) => (
          <PortfolioItem key={item.title} item={item} darkMode={darkMode} />
        ))}
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
