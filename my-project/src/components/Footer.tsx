import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-white border-t border-gray-200 p-4 flex flex-col sm:flex-row sm:justify-between items-center font-supply-mono text-sm gap-2">
      <div className="text-gray-600 text-center sm:text-left">
        Thanks for visiting!
      </div>
      <div className="text-gray-600 text-center sm:text-right">
        (C) Akash Moorching. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
