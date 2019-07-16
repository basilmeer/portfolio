import React from 'react';
import axios from 'axios';

function returnShibeImg() {
  let url = axios.get('http://shibe.online/api/shibes?count=1&urls=true&httpsUrls=true').then((res) => res[0]).catch((err) => console.log(err));
  console.log(url);
  return url;
}

function PortfolioItem(props) {
  return(
    <div className="portfolio-item">
      <span className="image">
        <img src={props.image} alt=""/>
      </span>
      <a href="#">
        <h2>Title</h2>
        <div className="content">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
      </a>
    </div>
  );
}

export default PortfolioItem;