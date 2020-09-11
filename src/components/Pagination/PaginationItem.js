import React from 'react';

const PaginationItem = ({ numberOfPages, activePage, setActivePage }) => {
  for (let i = 0; i < numberOfPages; i++) {
    return (
      <li className={`page-item ${activePage === i && 'active'}`}>
        <a
          onClick={() => setActivePage(i + 1)}
          href='javascript:void(0)'
          className='page-link'>
          {i + 1}
        </a>
      </li>
    );
  }
};

export default PaginationItem;
