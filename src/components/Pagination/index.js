import React from 'react';
import PaginationItem from './PaginationItem';

const Pagination = ({ numberOfPages, activePage, setActivePage }) => (
  <ul className='pagination'>
    <PaginationItem
      numberOfPages={numberOfPages}
      activePage={activePage}
      setActivePage={setActivePage}
    />
  </ul>
);

export default Pagination;
