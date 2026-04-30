import PaginationItem from './PaginationItem';
import PropTypes from 'prop-types';

const Pagination = ({ numberOfPages, activePage, setActivePage, darkMode }) => (
  <ul
    className={`mx-auto mt-6 flex w-fit items-center gap-0 border p-0 ${
      darkMode
        ? 'border-white/30 bg-transparent'
        : 'border-black/30 bg-transparent'
    }`}
  >
    <PaginationItem
      numberOfPages={numberOfPages}
      activePage={activePage}
      setActivePage={setActivePage}
      darkMode={darkMode}
    />
  </ul>
);

export default Pagination;

Pagination.propTypes = {
  numberOfPages: PropTypes.number.isRequired,
  activePage: PropTypes.number.isRequired,
  setActivePage: PropTypes.func.isRequired,
  darkMode: PropTypes.bool.isRequired,
};
