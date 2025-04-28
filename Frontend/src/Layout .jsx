import React from 'react';
import Toplink from './Component/Navbar/Toplink';
import Navbar from './Component/Navbar/Navbar';
import Footer from './Content/Footer/Footer';
import { Outlet } from 'react-router-dom';
import Herosection from './Content/Herosection/Herosection';
import Welcomesection from './Content/Welcomesection/Welcomesection';
import Card from './Content/Card/Card';
import AdvisorSection from './Content/AdvisorSection/AdvisorSection';
import Vision from './Content/Vision/Vision';
import Blog from './Content/Blog/Blog';
import Areaoffocus from './Content/Area of Focus/Areaoffocus.jsx';
import Enhance from './Content/Enhance/Enhance';
import Award from './Content/Award/Award';
import AboutusBanner from './Content/AboutusBanner/Banner';
import Aboutussection from './Component/Aboutussection/Aboutussection';
import Valuesection from './Content/ValueSection/Valuesection';
import Recognition from './Content/Recognition/Recognition';
import Management from './Content/Management/Management';
import Evolution from './Content/Evolution/Evolution';
import DoctorList from './Content/DoctorGrid/DoctorGrid';
import CareerBanner from './Content/CareerBanner/CareerBanner';
import CareerSection from './Content/Nurturing/Nurturing';
import CareerHighlights from './Content/CareerHighlights/CareerHighlights';
import OpportunitySection from './Content/OpportunitySection/OpportunitySection';
import ApplyForm from './Content/ApplyForm/ApplyForm';
import DoctorGrid from './Content/DoctorGrid/DoctorGrid';








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
