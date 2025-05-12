import Header from './assets/components/Header';
import Filters from './assets/components/Filters';
import Extensions from '../src/assets/components/Extensions';

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

  return (
    <>
      <div className='px-4 pt-5 pb-16 md:pt-10 max-w-[1170px] mx-auto'>
        <Header />
        <div>
          <div className='flex flex-col sm:flex-row sm:justify-between'>
            <h1 className='mb-7 text-3xl md:text-4xl font-bold text-blue-zodiac text-center transform duration-300 dark:text-white'>
              Extensions List
            </h1>
            <Filters
              filters={filters}
              filterExtension={filterExtension}
              onClickFilterHandler={onClickFilterHandler}
            />
          </div>
          <Extensions
            filteredExtensions={filteredExtensions}
            onClickRemoveHandler={onClickRemoveHandler}
            onChangeActiveExtensionHandler={onChangeActiveExtensionHandler}
          />
          {filteredExtensions.length === 0 && (
            <div className='px-5 py-10 md:p-10 bg-white flex items-center justify-center rounded-xl text-lg md:text-2xl font-semibold dark:bg-martinique dark:text-white border border-gray-300 dark:border-gray-600'>
              Extensions list is empty
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
