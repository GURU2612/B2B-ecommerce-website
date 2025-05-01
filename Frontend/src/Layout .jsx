import React from 'react';
import Toplink from './Component/Navbar/Toplink';
import Navbar from './Component/Navbar/Navbar';
import Footer from './Content/Footer/Footer';
import { Outlet } from 'react-router-dom';





const Layout = () => {
  return (
    <>
      <Toplink />
      <Navbar/>
        <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
