import React from 'react';

import Spacer from '../../components/Spacer';
import DarkMode from './DarkMode';
import Buttons from './Buttons';
import TextFields from './TextFields';
import Popovers from './Popovers';

const App = () => {
  return (
    <div className="flex min-h-screen">
      <aside
        className="bg-gray-100 dark:bg-gray-900 p-4 hidden sm:flex sm:w-64 sm:flex-col sm:justify-between h-screen sticky left-0 top-0"
        aria-label="Sidebar"
      >
        <h1 className="text-gray-900 dark:text-gray-100 font-semibold">
          Relook
        </h1>
        <div className="flex-grow" aria-label="Menu"></div>
        <DarkMode />
      </aside>
      <div className="p-4 bg-gray-50 dark:bg-slate-800 flex-grow">
        <div className="border-b border-b-grey-dark dark:border-grey p-4 text-center py-2 sm:hidden">
          <h1 className="text-gray-900 dark:text-gray-100 font-semibold">
            Relook
          </h1>
          <DarkMode />
        </div>
        <Spacer direction="vertical" className="h-5" />
        <Buttons />
        <Spacer direction="vertical" className="h-5" />
        <TextFields />
        <Spacer direction="vertical" className="h-5" />
        <Popovers />
        <Spacer direction="vertical" className="h-40" />
      </div>
    </div>
  );
};

export default App;
