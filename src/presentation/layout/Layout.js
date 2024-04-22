import React from 'react';
// import Header from '../dashboard-header-folder/dashboard-header';
import Footer from '../dashboard-footer-folder/dashboard-footer';
import  Header from '../dashboard-header-folder/dashboard-header';

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
      <Header/>
      <main>
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
