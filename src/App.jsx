import Logo from '../src/assets/images/logo.svg';
import Moon from '../src/assets/images/icon-moon.svg';
import { useState, useEffect } from 'react';

function App() {
  const extensionsArr = [
    {
      id: 1,
      logo: '../src/assets/images/logo-devlens.svg',
      name: 'DevLens',
      description:
        'Quickly inspect page layouts and visualize element boundaries.',
      isActive: true,
    },
    {
      id: 2,
      logo: '../src/assets/images/logo-style-spy.svg',
      name: 'StyleSpy',
      description: 'Instantly analyze and copy CSS from any webpage element.',
      isActive: true,
    },
    {
      id: 3,
      logo: '../src/assets/images/logo-speed-boost.svg',
      name: 'SpeedBoost',
      description:
        'Optimizes browser resource usage to accelerate page loading.',
      isActive: false,
    },
    {
      id: 4,
      logo: '../src/assets/images/logo-json-wizard.svg',
      name: 'JSONWizard',
      description:
        'Formats, validates, and prettifies JSON responses in-browser.',
      isActive: true,
    },
    {
      id: 5,
      logo: '../src/assets/images/logo-tab-master-pro.svg',
      name: 'TabMaster Pro',
      description: 'Organizes browser tabs into groups and sessions.',
      isActive: true,
    },
    {
      id: 6,
      logo: '../src/assets/images/logo-viewport-buddy.svg',
      name: 'ViewportBuddy',
      description:
        'Simulates various screen resolutions directly within the browser.',
      isActive: false,
    },
    {
      id: 7,
      logo: '../src/assets/images/logo-markup-notes.svg',
      name: 'Markup Notes',
      description:
        'Enables annotation and notes directly onto webpages for collaborative debugging.',
      isActive: true,
    },
    {
      id: 8,
      logo: '../src/assets/images/logo-grid-guides.svg',
      name: 'GridGuides',
      description:
        'Overlay customizable grids and alignment guides on any webpage.',
      isActive: false,
    },
    {
      id: 9,
      logo: '../src/assets/images/logo-palette-picker.svg',
      name: 'Palette Picker',
      description: 'Instantly extracts color palettes from any webpage.',
      isActive: true,
    },
    {
      id: 10,
      logo: '../src/assets/images/logo-link-checker.svg',
      name: 'LinkChecker',
      description: 'Scans and highlights broken links on any page.',
      isActive: true,
    },
    {
      id: 11,
      logo: '../src/assets/images/logo-dom-snapshot.svg',
      name: 'DOM Snapshot',
      description: 'Capture and export DOM structures quickly.',
      isActive: false,
    },
    {
      id: 12,
      logo: '../src/assets/images/logo-console-plus.svg',
      name: 'ConsolePlus',
      description:
        'Enhanced developer console with advanced filtering and logging.',
      isActive: true,
    },
  ];

  const [extensions, setExtensions] = useState([]);
  const [filterExtension, setFilterExtension] = useState('All');

  useEffect(() => {
    setExtensions(extensionsArr);
  }, []);

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

  const onClickAllHandler = () => setFilterExtension('All');
  const onClickActiveHandler = () => setFilterExtension('Active');
  const onClickInactiveHandler = () => setFilterExtension('Inactive');

  const filteredExtensions = extensions.filter((ext) => {
    if (filterExtension === 'Active') return ext.isActive;
    if (filterExtension === 'Inactive') return !ext.isActive;
    return true;
  });

  return (
    <>
      <div className='px-4 pt-5 pb-16 md:pt-10 max-w-[1170px] mx-auto'>
        <div className='flex justify-between p-3 bg-neutral-100 rounded-xl mb-11 md:mb-[75px]'>
          <img src={Logo} alt='Logo' />
          <img
            src={Moon}
            alt='Icon Moon'
            className='p-[15px] bg-neutral-200 rounded-xl cursor-pointer'
          />
        </div>
        <div>
          <div className='flex flex-col sm:flex-row sm:justify-between'>
            <h1 className='mb-7 text-3xl md:text-4xl font-bold text-blue-zodiac text-center'>
              Extensions List
            </h1>
            <div className='flex items-center justify-center gap-3 mb-10'>
              <button
                onClick={onClickAllHandler}
                className={`px-4 py-1.5 text-blue-zodiac bg-neutral-100 rounded-3xl hover:bg-red-500 hover:text-white cursor-pointer transform duration-300 ${
                  filterExtension === 'All' ? 'bg-red-500 text-white' : ''
                }`}
              >
                All
              </button>
              <button
                onClick={onClickActiveHandler}
                className={`px-4 py-1.5 text-blue-zodiac bg-neutral-100 rounded-3xl hover:bg-red-500 hover:text-white cursor-pointer transform duration-300 ${
                  filterExtension === 'Active' ? 'bg-red-500 text-white' : ''
                }`}
              >
                Active
              </button>
              <button
                onClick={onClickInactiveHandler}
                className={`px-4 py-1.5 text-blue-zodiac bg-neutral-100 rounded-3xl hover:bg-red-500 hover:text-white cursor-pointer transform duration-300 ${
                  filterExtension === 'Inactive' ? 'bg-red-500 text-white' : ''
                }`}
              >
                Inactive
              </button>
            </div>
          </div>

          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5'>
            {filteredExtensions.map((extension) => (
              <div key={extension.id} className='p-4 bg-neutral-100 rounded-xl'>
                <div className='flex gap-4'>
                  <div className='w-[60px] mb-8'>
                    <img
                      className='w-full min-w-[60px]'
                      src={extension.logo}
                      alt=''
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
                  <button
                    onClick={() => onClickRemoveHandler(extension.id)}
                    className='px-4 border border-gray-300 py-1.5 bg-neutral-100 rounded-3xl hover:bg-red-500 hover:border-red-500 hover:text-white cursor-pointer transform duration-300'
                  >
                    Remove
                  </button>
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
                    <span className="absolute content-[''] h-[14px] w-[14px] left-[3px] bottom-[3px] bg-white transition duration-300 rounded-full peer-checked:translate-x-[16px]"></span>
                  </label>
                </div>
              </div>
            ))}
          </div>

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
