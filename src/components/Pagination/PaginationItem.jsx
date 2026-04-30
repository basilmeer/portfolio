import PropTypes from 'prop-types';

const PaginationItem = ({ numberOfPages, activePage, setActivePage, darkMode }) => {
  const paginationItemsArray = [];

  for (let i = 0; i < numberOfPages; i++) {
    paginationItemsArray.push(
      <li
        key={i}
      >
        <button
          type="button"
          className={
            `
            min-w-11 border-r px-4 py-2 text-sm font-semibold tracking-wide transition-colors duration-150
            focus:outline-none
            ${activePage === i && !darkMode && 'bg-black text-white'}
            ${activePage === i && darkMode && 'bg-white text-black'}
            ${activePage !== i && darkMode && 'bg-transparent text-white hover:bg-white/10'}
            ${activePage !== i && !darkMode && 'bg-transparent text-black hover:bg-black/10'}
            ${darkMode ? 'border-r-white/30' : 'border-r-black/30'}
            ${i === numberOfPages - 1 ? 'border-r-0' : ''}
            `
          }
          aria-current={activePage === i ? 'page' : undefined}
          onClick={() => {
            setActivePage(i);
          }}
        >
          {i + 1}
        </button>
      </li>
    )
  }

  return paginationItemsArray;
};

export default PaginationItem;

PaginationItem.propTypes = {
  numberOfPages: PropTypes.number.isRequired,
  activePage: PropTypes.number.isRequired,
  setActivePage: PropTypes.func.isRequired,
  darkMode: PropTypes.bool.isRequired,
};
