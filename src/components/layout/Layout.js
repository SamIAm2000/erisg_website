import React from 'react';
import Header from './Header';
import Footer from './Footer';

function Layout({ children }) {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />
      <main className="flex w-full flex-1 justify-center py-6 md:py-8">
        <div className="eris-page-inner w-full max-w-[100%] px-6 md:max-w-[85%] md:px-[5rem]">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
