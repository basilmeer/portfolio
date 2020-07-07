import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Snackbar from './components/Snackbar';
import Welcome from './components/Welcome';
import Footer from './components/Footer';

export default () => (
  <div className='App'>
    <Snackbar />
    <Router>
      <Navbar />
      <Route exact path='/'>
        <Welcome />
        <Portfolio />
        <Contact />
        <Footer />
      </Route>
      <Route exact path='/projects'>
        <Portfolio />
      </Route>
    </Router>
  </div>
);
