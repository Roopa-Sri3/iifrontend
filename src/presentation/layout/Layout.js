import React from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import Toaster from '../../components/container/toaster/Toaster';

/**
 * Creates a genaric Layout for all pages. Except for Login.
 * @param {Element} children The body content.
 * @returns Page Layout with details
 */
function Layout({
  children,
}) {
  return (
    <div>
      <Header />
      <Toaster />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
