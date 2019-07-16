import React from 'react';
import PortfolioItem from './PortfolioItem';

let portfolioList = [
  {
    "title": "React and Redux IM",
    "image": "http://cdn.shibe.online/shibes/382fdb970e8ebf3c08063146dc8d67339c396918.jpg",
    "content": "Made a chat app built with React, Redux Saga and Websockets that runs purely on the client-side with no back-end.",
    "href": "#"
  },
  {
    "title": "OMDbrowser",
    "image": "http://cdn.shibe.online/shibes/0356e81bda039639f08713aec4a54b0fb611739e.jpg",
    "content": "Made React-based web app that uses the OMDb API to query and show movies, TV series and whatnot.",
    "href": "#"
  },
  {
    "title": "Nadius Solutions",
    "image": "http://cdn.shibe.online/shibes/b5cd5a2d04362c4d71357a58c5aa2f116cd3443e.jpg",
    "content": "Made the company website for a Dutch software house that provides various web-related services.",
    "href": "#"
  },
  {
    "title": "Veteranlogix",
    "image": "http://cdn.shibe.online/shibes/698ece2c56cddd05016ad9c1d3959204c288a0b3.jpg",
    "content": "Made the company website for a Pakistan-based software house that provides custom-tailored digital solutions.",
    "href": "#"
  },
  {
    "title": "ManilaForKids",
    "image": "http://cdn.shibe.online/shibes/515551501802df0bb043f791a395797a5e144f93.jpg",
    "content": "Improved the performance for a Phillipines-based resource for parents looking for activities and whatnot for their kids in Manila Metro.",
    "href": "#"
  },
  {
    "title": "React Quiz App",
    "image": "http://cdn.shibe.online/shibes/d6353cd7ab963d7dee0d9fe5bba08cb6e662e3f2.jpg",
    "content": "Made a React-based web app that uses a JSON object to display MCQs after which it parses the answers and provides the result.",
    "href": "#"
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
            <PortfolioItem key={key} title={item.title} image={item.image} content={item.content} href={item.href} />    
          )
        }
      </div>
      <button className="btn btn-outline-primary mt-4">View All</button>
    </div>
  );
}

export default Portfolio;