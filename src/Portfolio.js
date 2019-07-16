import React from 'react';
import PortfolioItem from './PortfolioItem';

function Portfolio() {
  return(
    <div className="mt-5" id="portfolio">
      <div className="page-header text-center">
        <h3>Portfolio</h3>
      </div>
      <div className="portfolio-tiles my-3">
        <PortfolioItem image={"http://cdn.shibe.online/shibes/382fdb970e8ebf3c08063146dc8d67339c396918.jpg"} />
        <PortfolioItem image={"http://cdn.shibe.online/shibes/b5cd5a2d04362c4d71357a58c5aa2f116cd3443e.jpg"} />
        <PortfolioItem image={"http://cdn.shibe.online/shibes/698ece2c56cddd05016ad9c1d3959204c288a0b3.jpg"} />
        <PortfolioItem image={"http://cdn.shibe.online/shibes/0356e81bda039639f08713aec4a54b0fb611739e.jpg"} />
        <PortfolioItem image={"http://cdn.shibe.online/shibes/515551501802df0bb043f791a395797a5e144f93.jpg"} />
        <PortfolioItem image={"http://cdn.shibe.online/shibes/d6353cd7ab963d7dee0d9fe5bba08cb6e662e3f2.jpg"} />
      </div>
      <button className="btn btn-outline-primary mt-4">View All</button>
    </div>
  );
}

export default Portfolio;