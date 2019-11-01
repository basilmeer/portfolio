import React, { Component } from 'react';
import Portfolio from "./Portfolio";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Contact from './Contact';
import './App.css';
import resume from './basilmeer-resume-oct-2019.pdf';
import picture from './basil-meer.jpg';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ul className="sm-list">
          <li><a href="mailto:hello@basilmeer.com"><FontAwesomeIcon icon={ faEnvelope } size="lg" /></a></li>
          <li><a href="https://www.linkedin.com/in/basilmeer/"><FontAwesomeIcon icon={ faLinkedin } size="lg" /></a></li>
          <li><a href="https://github.com/basilmeer/"><FontAwesomeIcon icon={ faGithub } size="lg" /></a></li>
        </ul>
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-8 order-2 order-md-1">
              <div className="page-header">
                <h1 className="display-4">Welcome</h1>
                <p className="lead">I'm <span className="font-weight-bold">Basil Meer</span>, a <span className="font-weight-bold">Front-End Developer</span> and a <span className="font-weight-bold">UI/UX Designer</span>, and I am currently available for hire. If you think I'm the right guy for the job then hit me up at <a href="mailto:hello@basilmeer.com">hello@basilmeer.com</a> and maybe we can work something out!</p>
                <a target="_blank" href={ resume } className="btn btn-outline-primary mr-2">Download Resume</a>
              </div>
            </div>
            <div className="col-12 col-md-4 order-1 order-md-2 text-center text-md-left">
              <img src={picture} alt="" className="img-fluid img-me"/>
            </div>
          </div>
          <Portfolio />
          <Contact />
          <footer className="mt-5" id="footer">
            <div className="row">
              <div className="col-lg-12">
                <ul className="list-unstyled">
                  <li className="float-right">
                    <a href="#">Back to top</a>
                  </li>
                  <li>
                    You can also find me here:
                    </li>
                  <li>
                    <a href="mailto:hello@basilmeer.com"><FontAwesomeIcon icon={ faEnvelope } /></a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/basilmeer/"><FontAwesomeIcon icon={ faLinkedin } /></a>
                  </li>
                  <li>
                    <a href="https://github.com/basilmeer/"><FontAwesomeIcon icon={ faGithub } /></a>
                  </li>
                </ul>
                <p>Copyright 2019 &copy; <a href="https://www.basilmeer.com">Basil Meer</a>. All rights reserved.</p>
              </div>
            </div>
          </footer>
        </div>
      </div>
    );
  }
}

export default App;
