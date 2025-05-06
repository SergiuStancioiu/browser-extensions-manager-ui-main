import Logo from '../src/assets/images/logo.svg';
import Moon from '../src/assets/images/icon-moon.svg';

function App() {
  const extensions = [
    {
      logo: '../src/assets/images/logo-devlens.svg',
      name: 'DevLens',
      description:
        'Quickly inspect page layouts and visualize element boundaries.',
      isActive: true,
    },
    {
      logo: '../src/assets/images/logo-style-spy.svg',
      name: 'StyleSpy',
      description: 'Instantly analyze and copy CSS from any webpage element.',
      isActive: true,
    },
    {
      logo: '../src/assets/images/logo-speed-boost.svg',
      name: 'SpeedBoost',
      description:
        'Optimizes browser resource usage to accelerate page loading.',
      isActive: false,
    },
    {
      logo: '../src/assets/images/logo-json-wizard.svg',
      name: 'JSONWizard',
      description:
        'Formats, validates, and prettifies JSON responses in-browser.',
      isActive: true,
    },
    {
      logo: '../src/assets/images/logo-tab-master-pro.svg',
      name: 'TabMaster Pro',
      description: 'Organizes browser tabs into groups and sessions.',
      isActive: true,
    },
    {
      logo: '../src/assets/images/logo-viewport-buddy.svg',
      name: 'ViewportBuddy',
      description:
        'Simulates various screen resolutions directly within the browser.',
      isActive: false,
    },
    {
      logo: '../src/assets/images/logo-markup-notes.svg',
      name: 'Markup Notes',
      description:
        'Enables annotation and notes directly onto webpages for collaborative debugging.',
      isActive: true,
    },
    {
      logo: '../src/assets/images/logo-grid-guides.svg',
      name: 'GridGuides',
      description:
        'Overlay customizable grids and alignment guides on any webpage.',
      isActive: false,
    },
    {
      logo: '../src/assets/images/logo-palette-picker.svg',
      name: 'Palette Picker',
      description: 'Instantly extracts color palettes from any webpage.',
      isActive: true,
    },
    {
      logo: '../src/assets/images/logo-link-checker.svg',
      name: 'LinkChecker',
      description: 'Scans and highlights broken links on any page.',
      isActive: true,
    },
    {
      logo: '../src/assets/images/logo-dom-snapshot.svg',
      name: 'DOM Snapshot',
      description: 'Capture and export DOM structures quickly.',
      isActive: false,
    },
    {
      logo: '../src/assets/images/logo-console-plus.svg',
      name: 'ConsolePlus',
      description:
        'Enhanced developer console with advanced filtering and logging.',
      isActive: true,
    },
  ];
  return (
    <>
      <div className='px-4 pt-5'>
        <div className='flex justify-between p-3 bg-neutral-100 rounded-xl mb-11'>
          <img src={Logo} alt='Logo' />
          <img
            src={Moon}
            alt='Icon Moon'
            className='p-[15px] bg-neutral-200 rounded-xl'
          />
        </div>
        <div>
          <h1 className='mb-7 text-3xl font-bold text-neutral-900 text-center'>
            Extensions List
          </h1>
          {/* Filters Wrapper */}
          <div className='flex items-center justify-center gap-3 mb-10'>
            <button className='px-4 py-1.5 bg-neutral-100 rounded-3xl hover:bg-red-500 hover:text-white cursor-pointer transform duration-300'>
              All
            </button>
            <button className='px-4 py-1.5 bg-neutral-100 rounded-3xl hover:bg-red-500 hover:text-white cursor-pointer transform duration-300'>
              Active
            </button>
            <button className='px-4 py-1.5 bg-neutral-100 rounded-3xl hover:bg-red-500 hover:text-white cursor-pointer transform duration-300'>
              Inactive
            </button>
          </div>
          <div className='flex flex-col gap-2.5'>
            {extensions.map((extension, index) => {
              return (
                <div key={index} className='p-4 bg-neutral-100 rounded-xl'>
                  <div className='flex gap-4'>
                    <div className='w-[60px] mb-8'>
                      <img
                        className='w-full min-w-[60px]'
                        src={extension.logo}
                        alt=''
                      />
                    </div>
                    <div>
                      <h2 className='text-xl font-bold'>{extension.name}</h2>
                      <p className='text-sm'>{extension.description}</p>
                    </div>
                  </div>
                  <div className='flex justify-between'>
                    <button className='px-4 border border-gray-300 py-1.5 bg-neutral-100 rounded-3xl hover:bg-red-500 hover:border-red-500 hover:text-white cursor-pointer transform duration-300'>
                      Remove
                    </button>
                    <label className='relative inline-block w-[36px] h-[20px]'>
                      <input type='checkbox' className='sr-only peer' />
                      <span className='absolute cursor-pointer top-0 left-0 right-0 bottom-0 bg-gray-300 transition duration-300 peer-checked:bg-red-500 peer-focus:ring-1 peer-focus:ring-red-500 rounded-full'></span>
                      <span className="absolute content-[''] h-[14px] w-[14px] left-[3px] bottom-[3px] bg-white transition duration-300 rounded-full peer-checked:translate-x-[16px]"></span>
                    </label>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
