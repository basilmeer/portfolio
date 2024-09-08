const PaginationItem = ({ numberOfPages, activePage, setActivePage, darkMode }) => {
  const paginationItemsArray = [];

  for (let i = 0; i < numberOfPages; i++) {
    paginationItemsArray.push(
      <li
        key={i}
      >
        <a
          className={
            `
            px-3 py-2 border hover:cursor-pointer
            ${activePage === i && 'bg-gray-100'}
            ${darkMode && activePage === i && 'bg-white/10'}
            ${darkMode ? 'border-white/20' : ''}
            `
          }
          onClick={(e) => {
            e.preventDefault();
            setActivePage(i);
          }}
        >
          {i + 1}
        </a>
      </li>
    )
  }

  return paginationItemsArray;
};

export default PaginationItem;
