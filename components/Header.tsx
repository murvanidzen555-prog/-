
import React from 'react';
import { SunIcon } from './Icons';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-6 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="text-orange-500">
             <SunIcon className="w-12 h-12" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800">D ვიტამინის გზამკვლევი</h1>
            <p className="text-sm md:text-base text-gray-500">თქვენი სანდო წყარო ჯანმრთელობისთვის</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
