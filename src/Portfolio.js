import React from 'react';
import PortfolioItem from './PortfolioItem';

let portfolioList = [
  {
    "title": "Title",
    "image": "http://cdn.shibe.online/shibes/382fdb970e8ebf3c08063146dc8d67339c396918.jpg",
    "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    "title": "Title",
    "image": "http://cdn.shibe.online/shibes/b5cd5a2d04362c4d71357a58c5aa2f116cd3443e.jpg",
    "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    "title": "Title",
    "image": "http://cdn.shibe.online/shibes/698ece2c56cddd05016ad9c1d3959204c288a0b3.jpg",
    "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    "title": "Title",
    "image": "http://cdn.shibe.online/shibes/0356e81bda039639f08713aec4a54b0fb611739e.jpg",
    "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    "title": "Title",
    "image": "http://cdn.shibe.online/shibes/515551501802df0bb043f791a395797a5e144f93.jpg",
    "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    "title": "Title",
    "image": "http://cdn.shibe.online/shibes/d6353cd7ab963d7dee0d9fe5bba08cb6e662e3f2.jpg",
    "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  }
]

function Portfolio() {
  return(
    <div id="portfolio">
      <div className="page-header text-center">
        <h3>Portfolio</h3>
      </div>
      <div className="portfolio-tiles my-3">
        {
          portfolioList.map((item, key) =>
            <PortfolioItem key={key} title={item.title} image={item.image} content={item.content} />    
          )
        }
      </div>
      <button className="btn btn-outline-primary mt-4">View All</button>
    </div>
  );
}

export default Portfolio;