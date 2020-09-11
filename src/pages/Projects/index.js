import React from 'react';
import Portfolio from '../../components/Portfolio';
import Snackbar from '../../components/Snackbar';
import Footer from '../../components/Footer';

const Projects = () => (
  <>
    <Snackbar />
    <div id='projects'>
      <Portfolio defaultItems={4} showPagination={true} showMoreLink={false} />
    </div>
    <Footer />
  </>
);

export default Projects;
