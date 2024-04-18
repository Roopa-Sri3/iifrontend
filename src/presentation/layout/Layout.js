import React from 'react';
// import Header from '../dashboard-header-folder/dashboard-header';
import Footer from '../dashboard-footer-folder/dashboard-footer';
import  LoginHeader from '../login-layout-header/login-header';

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
      <LoginHeader/>
      <main>
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
