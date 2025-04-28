import React from 'react'
import Herosection from '../../Content/Herosection/Herosection.jsx'
import Welcomesection from '../../Content/Welcomesection/Welcomesection.jsx'
import Navbar from '../Navbar/Navbar.jsx'
import Toplink from '../Navbar/Toplink.jsx'
import AreaOfFocus from '../../Content/Area of Focus/Areaoffocus.jsx'
import Award from '../../Content/Award/Award.jsx'
import Enhance from '../../Content/Enhance/Enhance.jsx'
import Vision from '../../Content/Vision/Vision.jsx'
import Footer from '../../Content/Footer/Footer.jsx'
import BlogSection from '../../Content/Blog/Blog.jsx'
import AdvisorSection from "../../Content/AdvisorSection/AdvisorSection.jsx";

const Home = () => {
  return (
    <div>

     
      <Herosection/>
      <Welcomesection/>
      <AreaOfFocus/>
        <AdvisorSection/>
      <Award/>
       <Enhance/>
       <Vision/>
       <BlogSection/>

    </div>
  )
}

export default Home
