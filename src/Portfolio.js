import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PortfolioItem from './PortfolioItem';
import combo_fu_thumbnail from './portfolio/combo_fu.png';
import omdbrowser_thumbnail from './portfolio/omdbrowser.png';
import recipes_a_la_react_thumbnail from './portfolio/recipes_a_la_react.png';
import react_redux_im_thumbnail from './portfolio/react_redux_im.png';
import veteranlogix_thumbnail from './portfolio/veteranlogix.png';
import nadius_solutions_thumbnail from './portfolio/nadius_solutions.png';
import veteran_people_thumbnail from './portfolio/veteran_people.png';
import villa_thumbnail from './portfolio/villa.png';
import hobuddies_thumbnail from './portfolio/hobuddies.png';
import clean_thumbnail from './portfolio/clean.png';
import snapshot_thumbnail from './portfolio/snapshot.png';
import craft_world_thumbnail from './portfolio/craft_world.png';

let portfolioList = [
  {
    "title": "Combo-Fu",
    "image": combo_fu_thumbnail,
    "content": "A MERN-based web app that translates fighting game notation into visual inputs.",
    "href": "https://combo-fu.herokuapp.com"
  },
  {
    "title": "Recipes a la React",
    "image": recipes_a_la_react_thumbnail,
    "content": "A MERN-based recipe noting web app that also uses Apollo Boost to link up GraphQL.",
    "href": "https://recipes-a-la-react.herokuapp.com"
  },
  {
    "title": "React and Redux IM",
    "image": react_redux_im_thumbnail,
    "content": "Made a chat app built with React, Redux Saga and Websockets that runs purely on the client-side with no back-end.",
    "href": "https://github.com/basilmeer/react-redux-instant-messaging"
  },
  {
    "title": "OMDbrowser",
    "image": omdbrowser_thumbnail,
    "content": "Made React-based web app that uses the OMDb API to query and show movies, TV series and whatnot.",
    "href": "https://omdbrowser.netlify.com/"
  },
  {
    "title": "Nadius Solutions",
    "image": nadius_solutions_thumbnail,
    "content": "Made the company website for a Dutch software house that provides various web-related services.",
    "href": "http://nadisol.com/"
  },
  {
    "title": "Veteranlogix",
    "image": veteranlogix_thumbnail,
    "content": "Made the company website for a Pakistan-based software house that provides custom-tailored digital solutions.",
    "href": "https://www.veteranlogix.com/"
  },
  {
    "title": "Veteran People",
    "image": veteran_people_thumbnail,
    "content": "Redesigned and rebranded a digital agency's website that focused on developing, maintaining and hosting WordPress websites.",
    "href": "https://drive.google.com/open?id=1KV4rxLIaGd-FHCyaOiCWMYndZeQocOxp"
  },
  {
    "title": "Villa",
    "image": villa_thumbnail,
    "content": "Designed a website for a fictional real estate agency as a part of a batch of designs that was to be adapted to WordPress themes.",
    "href": "https://drive.google.com/open?id=1ePmgWYVRGZuZelE4RBvIztNxoTUdxG4p"
  },
  {
    "title": "Hobuddies",
    "image": hobuddies_thumbnail,
    "content": "Created the brand identity and made various graphics for marketing purposes for a speed-networking social media platform.",
    "href": "https://drive.google.com/open?id=1g2HtD-h0eC3nlGpl8cbvB89kizgG5b8C"
  },
  {
    "title": "clean",
    "image": clean_thumbnail,
    "content": "Designed a one page portfolio website for a fictional company as a part of a batch of designs that was to be adapted to WordPress themes.",
    "href": "https://drive.google.com/open?id=1SGttwhmoTD46uNHXvyg5CrP-iSCB-2wp"
  },
  {
    "title": "Snapshot",
    "image": snapshot_thumbnail,
    "content": "Designed a website for a fictional photography studio as a part of a batch of designs that was to be adapted to WordPress themes.",
    "href": "https://drive.google.com/open?id=1mZjTCMxc1Caaktjua8xXi0q7KWJvVAIw"
  },
  {
    "title": "Craft World",
    "image": craft_world_thumbnail,
    "content": "Designed the logo for a platform that aimed to give exposure to local handicraft artisans in Pakistan.",
    "href": "https://drive.google.com/open?id=1-qgvM6ADFRR8H4RszZHHOAHDflV1dgok"
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
        {/* <button className="btn btn-outline-primary mt-4">View All</button> */}
      </div>
  );
}

export default Portfolio;