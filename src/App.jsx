import Logo from '../src/assets/images/logo.svg';
import Moon from '../src/assets/images/icon-moon.svg';
import Sun from '../src/assets/images/icon-sun.svg';

import { useState, useEffect } from 'react';

function App() {
  const [extensions, setExtensions] = useState([]);
  const [filterExtension, setFilterExtension] = useState('All');

  const generateRandomId = () => Math.floor(Math.random() * 1000) + 1;
  const filters = ['All', 'Active', 'Inactive'];

  const onClickRemoveHandler = (id) => {
    setExtensions((prev) => prev.filter((ext) => ext.id !== id));
  };

  const onChangeActiveExtensionHandler = (id) => {
    const updatedExtensions = extensions.map((extension) =>
      extension.id === id
        ? { ...extension, isActive: !extension.isActive }
        : extension
    );
    setExtensions(updatedExtensions);
  };

  const onClickFilterHandler = (filter) => setFilterExtension(filter);

  const filteredExtensions = extensions.filter((ext) => {
    if (filterExtension === 'Active') return ext.isActive;
    if (filterExtension === 'Inactive') return !ext.isActive;

    return true;
  });

  const [darkMode, setDarkMode] = useState(() => {
    // Check localStorage for theme preference
    return localStorage.getItem('theme') === 'dark';
  });

  useEffect(() => {
    fetch('/data.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((jsonData) => {
        const dataWithIds = jsonData.map((item) => ({
          ...item,
          id: generateRandomId(),
        }));
        setExtensions(dataWithIds);
      })
      .catch((error) => console.error('Fetch error:', error));
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <>
      {/* Page Main Container */}
      <div className='px-4 pt-5 pb-16 md:pt-10 max-w-[1170px] mx-auto'>
        {/* Header Wrapper */}
        <div className='flex justify-between p-3 bg-neutral-100 dark:bg-ebony-clay rounded-xl mb-11 md:mb-[75px]'>
          {/* Page Logo */}
          <img
            className='filter dark:invert dark:brightness-50'
            src={Logo}
            alt='Logo'
          />
          {/* Toggle Dark Mode */}
          {!darkMode ? (
            <img
              onClick={() => setDarkMode(!darkMode)}
              src={Moon}
              alt='Icon Moon'
              className='p-[15px] bg-neutral-200 rounded-xl cursor-pointer'
            />
          ) : (
            <img
              onClick={() => setDarkMode(!darkMode)}
              src={Sun}
              alt='Icon Moon'
              className='p-[15px] bg-neutral-200 rounded-xl cursor-pointer'
            />
          )}
        </div>
        <div>
          {/* Title, Filters Wrapper */}
          <div className='flex flex-col sm:flex-row sm:justify-between'>
            {/* Title */}
            <h1 className='mb-7 text-3xl md:text-4xl font-bold text-blue-zodiac text-center'>
              Extensions List
            </h1>
            {/* Extensions Filters Wrapper */}
            <div className='flex items-center justify-center gap-3 mb-10'>
              {filters.map((filter, index) => {
                return (
                  <button
                    key={index}
                    onClick={() => onClickFilterHandler(filter)}
                    className={`px-4 py-1.5 text-blue-zodiac bg-neutral-100 rounded-3xl hover:bg-red-500 hover:text-white cursor-pointer transform duration-300 ${
                      filterExtension === filter ? 'bg-red-500 text-white' : ''
                    }`}
                  >
                    {filter}
                  </button>
                );
              })}
            </div>
          </div>
          {/* Extensions Wrapper */}
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5'>
            {filteredExtensions.map((extension) => (
              <div key={extension.id} className='p-4 bg-neutral-100 rounded-xl'>
                <div className='flex gap-4'>
                  <div className='w-[60px] mb-8'>
                    <img
                      className='w-full min-w-[60px]'
                      src={extension.logo}
                      alt={extension.name}
                    />
                  </div>
                  <div>
                    <h2 className='text-xl font-bold text-blue-zodiac'>
                      {extension.name}
                    </h2>
                    <p className='text-sm text-abbey'>
                      {extension.description}
                    </p>
                  </div>
                </div>
                <div className='flex justify-between'>
                  {/* Remove Extension Button */}
                  <button
                    onClick={() => onClickRemoveHandler(extension.id)}
                    className='px-4 border border-gray-300 py-1.5 bg-neutral-100 rounded-3xl hover:bg-red-500 hover:border-red-500 hover:text-white cursor-pointer transform duration-300'
                  >
                    Remove
                  </button>
                  {/* Toggle Switch */}
                  <label className='relative inline-block w-[36px] h-[20px]'>
                    <input
                      type='checkbox'
                      className='sr-only peer'
                      checked={extension.isActive}
                      onChange={() =>
                        onChangeActiveExtensionHandler(extension.id)
                      }
                    />
                    <span className='absolute cursor-pointer top-0 left-0 right-0 bottom-0 bg-gray-300 transition duration-300 peer-checked:bg-red-500 peer-focus:ring-1 peer-focus:ring-red-500 rounded-full'></span>
                    <span className="absolute cursor-pointer content-[''] h-[14px] w-[14px] left-[3px] bottom-[3px] bg-white transition duration-300 rounded-full peer-checked:translate-x-[16px]"></span>
                  </label>
                </div>
              </div>
            ))}
          </div>
          {/* Message Shown When No Extensions */}
          {filteredExtensions.length === 0 && (
            <div className='px-5 py-10 md:p-10 bg-white flex items-center justify-center rounded-xl text-lg md:text-2xl font-semibold'>
              Extensions list is empty
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
