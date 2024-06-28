import React from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Toaster from "../../components/container/toaster/Toaster";
import Loader from "../../components/container/loader/Loader";
import { useSelector } from "react-redux";
import { IsApiFetching } from "../../store/selector/app";
import "./Layout.css";

/**
 * Creates a genaric Layout for all pages. Except for Login.
 * @param {Element} children The body content.
 * @returns Page Layout with details
 */
function Layout({
  children,
}) {
  const isLoaderVisible = useSelector(IsApiFetching);
  return (

    <div>
      {isLoaderVisible && <Loader />}
      <Header />
      <Toaster />
      <main className="app-content">
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
