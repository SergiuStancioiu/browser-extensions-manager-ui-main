function Extensions({
  filteredExtensions,
  onClickRemoveHandler,
  onChangeActiveExtensionHandler,
}) {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5'>
      {filteredExtensions.map((extension) => (
        <div
          key={extension.id}
          className='p-4 bg-neutral-100 rounded-xl transform duration-300 dark:bg-ebony-clay border border-gray-300 dark:border-gray-700'
        >
          <div className='flex gap-4'>
            <div className='w-[60px] mb-8'>
              <img
                className='w-full min-w-[60px]'
                src={extension.logo}
                alt={extension.name}
              />
            </div>
            <div>
              <h2 className='text-xl font-bold text-blue-zodiac dark:text-white pb-1.5'>
                {extension.name}
              </h2>
              <p className='text-sm text-abbey dark:text-gray-400'>
                {extension.description}
              </p>
            </div>
          </div>
          <div className='flex justify-between items-center'>
            <button
              onClick={() => onClickRemoveHandler(extension.id)}
              className='px-4 py-1.5 bg-neutral-100 rounded-3xl hover:bg-red-500 hover:border-red-500 hover:text-white cursor-pointer transform duration-300 border border-gray-300 dark:border-gray-700 dark:bg-transparent dark:text-white'
            >
              Remove
            </button>
            <label className='relative inline-block w-[36px] h-[20px]'>
              <input
                type='checkbox'
                className='sr-only peer'
                checked={extension.isActive}
                onChange={() => onChangeActiveExtensionHandler(extension.id)}
              />
              <span className='absolute cursor-pointer top-0 left-0 right-0 bottom-0 bg-gray-300 transition duration-300 peer-checked:bg-red-500 peer-focus:ring-1 peer-focus:ring-red-500 rounded-full dark:bg-martinique'></span>
              <span className="absolute cursor-pointer content-[''] h-[14px] w-[14px] left-[3px] bottom-[3px] bg-white transition duration-300 rounded-full peer-checked:translate-x-[16px]"></span>
            </label>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Extensions;
