function Filters({ filters, filterExtension, onClickFilterHandler }) {
  return (
    <div className='flex items-center justify-center gap-3 mb-10'>
      {filters.map((filter, index) => {
        return (
          <button
            key={index}
            onClick={() => onClickFilterHandler(filter)}
            className={`px-4 py-1.5 text-blue-zodiac bg-neutral-100 rounded-3xl hover:bg-red-500 border border-gray-300 dark:border-gray-600 hover:text-white cursor-pointer transform duration-300 dark:bg-martinique dark:text-white ${
              filterExtension === filter
                ? 'bg-red-500 border border-red-500 dark:border-red-500 dark:bg-red-500 text-white'
                : ''
            }`}
          >
            {filter}
          </button>
        );
      })}
    </div>
  );
}

export default Filters;
