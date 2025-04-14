import React from 'react';
import Toplink from './Content/Navbar/Toplink';
import Navbar from './Content/Navbar/Navbar';
import Footer from './Content/Footer/Footer';
import { Outlet } from 'react-router-dom';
import Herosection from './Content/Herosection/Herosection';
import Welcomesection from './Content/Welcomesection/Welcomesection';
import Card from './Content/Card/Card';
import AdvisorSection from './Content/AdvisorSection/AdvisorSection';
import Vision from './Content/Vision/Vision';
import Blog from './Content/Blog/Blog';
import Areaoffocus from './Content/Areaoffocus/Areaoffocus';
import Enhance from './Content/Enhance/Enhance';
import Award from './Content/Award/Award';
import AboutusBanner from './Content/AboutusBanner/Banner';
import Aboutussection from './Content/Aboutussection/Aboutussection';
import Valuesection from './Content/ValueSection/Valuesection';
import Recognition from './Content/Recognition/Recognition';
import Management from './Content/Management/Management';
import Evolution from './Content/Evolution/Evolution';
import DoctorList from './Content/DoctorList/DoctorList';







const Layout = () => {
  return (
    <>
      {/* <Toplink />
      <Navbar/>
      <Herosection/>
      <Welcomesection/>
      <AdvisorSection/>
      <Card/>
      <Vision/>
      <Award/>
      <Blog/>
      <Areaoffocus/>
      <Enhance/>
      <AboutusBanner/>
      <Aboutussection/>
      <Valuesection/>
      <Recognition/>
      <Management/>
      <Evolution/>
      <Blog/>
      <DoctorList/>
      <Footer /> */}
      <Toplink/>
      <Navbar/>
      <Outlet/>
    </>
  );
};

export default Layout;
