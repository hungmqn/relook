import React, { useEffect, useState } from 'react';

import Button from '../../components/Button';

const MoonIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
      clipRule="evenodd"
    />
  </svg>
);

const SunIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
  </svg>
);

const AdjustmentsIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z" />
  </svg>
);

const DarkMode = () => {
  const [colorScheme, setColorScheme] = useState(localStorage.theme);

  useEffect(() => {
    if (!localStorage.theme) {
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        setColorScheme('dark');
      } else {
        setColorScheme('light');
      }
    }
  }, []);

  const handleToggleTheme = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    if (localStorage.theme === 'light') {
      localStorage.theme = 'dark';
      setColorScheme('dark');
      document.documentElement.classList.add('dark');
    } else {
      localStorage.theme = 'light';
      setColorScheme('light');
      document.documentElement.classList.remove('dark');
    }
  };

  const handlePickSystemColorScheme = (
    e: React.MouseEvent<HTMLButtonElement>
  ): void => {
    e.preventDefault();
    localStorage.removeItem('theme');
    document.documentElement.classList.remove('dark');

    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.classList.add('dark');
      setColorScheme('dark');
    } else {
      setColorScheme('light');
    }
  };

  return (
    <div className="sm:flex space-x-3 text-center">
      <Button
        onClick={handleToggleTheme}
        className="w-30"
        text={colorScheme === 'dark' ? <MoonIcon /> : <SunIcon />}
      />
      <Button
        className="w-30"
        onClick={handlePickSystemColorScheme}
        text={<AdjustmentsIcon />}
      />
    </div>
  );
};

export default DarkMode;
