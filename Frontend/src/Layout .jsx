import React from 'react';
import Toplink from './Content/Navbar/Toplink';
import Navbar from './Content/Navbar/Navbar';
import Footer from './Content/Footer/Footer';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <Toplink />
      <Navbar/>
      <Footer />
    </>
  );
};

export default Layout;
