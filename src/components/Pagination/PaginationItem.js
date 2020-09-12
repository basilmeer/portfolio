import React from 'react';

const PaginationItem = ({ numberOfPages, activePage, setActivePage }) => {
  const paginationItemsArray = [];
  for (let i = 0; i < numberOfPages; i++) {
    paginationItemsArray.push(
      <li className={`page-item ${activePage === i && 'active'}`} key={i}>
        <a
          onClick={(e) => {
            e.preventDefault();
            setActivePage(i);
          }}
          className='page-link'>
          {i + 1}
        </a>
      </li>
    )
  }
  return paginationItemsArray;
};

export default PaginationItem;
