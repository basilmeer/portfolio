import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Snackbar from './components/Snackbar';
import Welcome from './components/Welcome';
import Footer from './components/Footer';

import Projects from './pages/Projects';

export default () => {
  const [darkMode, setDarkMode] = useState(false);

  const handleThemeToggle = () => {
    setDarkMode(!darkMode);
    localStorage.setItem('darkMode', !darkMode);
  };

  useEffect(() => {
    setDarkMode(JSON.parse(localStorage.getItem('darkMode')));
  }, []);

  return (
    <div className={`App ${darkMode ? 'dark' : ''}`}>
      <Snackbar />
      <Router>
        <ScrollToTop />
        <Navbar darkMode={darkMode} handleThemeToggle={handleThemeToggle} />
        <Route exact path='/'>
          <Welcome />
          <Portfolio
            defaultItems={4}
            showPagination={false}
            showMoreLink={true}
          />
          <Contact />
          <Footer />
        </Route>
        <Route exact path='/projects'>
          <Projects />
        </Route>
      </Router>
    </div>
  );
};
