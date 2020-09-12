import React from 'react';
import Portfolio from '../../components/Portfolio';
import Footer from '../../components/Footer';

const Projects = () => (
  <>
    <div id='projects'>
      <Portfolio defaultItems={4} showPagination={true} showMoreLink={false} />
    </div>
    <Footer />
  </>
);

export default Projects;
