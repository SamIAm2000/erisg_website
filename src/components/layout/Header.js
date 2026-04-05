import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="relative z-10 mb-10 bg-white md:mb-12">
      <div className="w-full md:flex md:justify-center">
        <div className="eris-page-inner w-full max-w-[100%] px-6 pt-6 md:max-w-[85%] md:px-[5rem] md:pt-[3rem]">
          {/* Mobile: stacked, all left-aligned (matches Cargo mobile) */}
          <div className="flex flex-col items-start gap-3 md:hidden">
            <h1 className="eris-h1">
              <Link to="/">Eris Gao</Link>
            </h1>
            <h1 className="eris-h1">
              <Link to="/playground">playground</Link>
            </h1>
            <h1 className="eris-h1">
              <Link to="/about">About</Link>
            </h1>
          </div>
          {/* Desktop: original grid */}
          <div className="hidden grid-cols-12 items-start gap-x-0 md:grid">
            <div className="col-span-6">
              <h1 className="eris-h1 whitespace-nowrap">
                <Link to="/">Eris Gao</Link>
              </h1>
            </div>
            <div className="col-span-3" aria-hidden="true" />
            <div className="col-span-2">
              <h1 className="eris-h1">
                <Link to="/playground">playground</Link>
              </h1>
            </div>
            <div className="col-span-1 text-right">
              <h1 className="eris-h1">
                <Link to="/about">About</Link>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
