import React from 'react';

import DarkMode from './DarkMode';
import Buttons from './Buttons';

const App = () => {
  return (
    <div className="flex min-h-screen">
      <aside
        className="bg-gray-100 dark:bg-gray-900 p-4 hidden sm:flex sm:w-64 sm:flex-col sm:justify-between"
        aria-label="Sidebar"
      >
        <h1 className="text-gray-900 dark:text-gray-100 font-semibold">
          Relook
        </h1>
        <div className="flex-grow" aria-label="Menu"></div>
        <DarkMode />
      </aside>
      <div className="p-4 dark:bg-slate-800 flex-grow">
        <Buttons />
      </div>
    </div>
  );
};

export default App;
