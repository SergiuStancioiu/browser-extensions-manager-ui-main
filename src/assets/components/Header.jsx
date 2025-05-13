import Logo from '../images/logo.svg?react';
import Moon from '../images/icon-moon.svg';
import Sun from '../images/icon-sun.svg';

import { useState, useEffect } from 'react';

function Header() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

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
    <div className='flex justify-between p-3 bg-neutral-100 dark:bg-ebony-clay rounded-xl mb-11 md:mb-[75px] transform duration-300 items-center'>
      <Logo className='text-black dark:text-white' />

      {!darkMode ? (
        <img
          onClick={() => setDarkMode(true)}
          src={Moon}
          alt='Icon Moon'
          className='p-[15px] bg-neutral-200 rounded-xl cursor-pointer'
        />
      ) : (
        <img
          onClick={() => setDarkMode(false)}
          src={Sun}
          alt='Icon Sun'
          className='p-[15px] bg-neutral-200 dark:bg-martinique rounded-xl cursor-pointer'
        />
      )}
    </div>
  );
}

export default Header;
