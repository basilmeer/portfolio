import React, { Component } from 'react';
import Portfolio from "./Portfolio";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Contact from './Contact';
import './App.css';
import picture from './basil-meer.jpg';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container py-5">
          <div className="row">
            <div className="col-9">
              <div className="page-header">
                <h1 className="display-4">Salaam.</h1>
                <p className="lead">I'm Basil Meer, a Front-End Developer and a UI/UX Designer. Welcome to my portfolio!</p>
                <a href="#" className="btn btn-outline-primary mr-2">Resume</a>
                <a href="#" className="btn btn-outline-secondary">CV</a>
              </div>
            </div>
          </div>
          <Portfolio />
          <Contact />
          <footer className="mt-5" id="footer">
            <div className="row">
              <div className="col-lg-12">
                <ul className="list-unstyled">
                  <li className="float-right"><a href="#top">Back to top</a></li>
                  <li><a href="https://twitter.com/basil_meer"><FontAwesomeIcon icon={ faEnvelope } /></a></li>
                  <li><a href="https://github.com/basilmeer/"><FontAwesomeIcon icon={ faLinkedin } /></a></li>
                  <li><a href="https://github.com/basilmeer/"><FontAwesomeIcon icon={ faGithub } /></a></li>
                </ul>
                <p>Created by <a href="https://thomaspark.co">Basil Meer</a>.</p>
              </div>
            </div>
          </footer>
        </div>
      </div>
    );
  }
}

export default App;
