import PaginationItem from './PaginationItem';

const Pagination = ({ numberOfPages, activePage, setActivePage, darkMode }) => (
  <ul className='pagination flex'>
    <PaginationItem
      numberOfPages={numberOfPages}
      activePage={activePage}
      setActivePage={setActivePage}
      darkMode={darkMode}
    />
  </ul>
);

export default Pagination;
