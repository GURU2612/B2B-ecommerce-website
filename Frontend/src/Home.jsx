import React from 'react'
import Herosection from './Content/Herosection/Herosection'
import Welcomesection from './Content/Welcomesection/Welcomesection'
import Navbar from './Content/Navbar/Navbar'
import Toplink from './Content/Navbar/Toplink'
import AreaOfFocus from './Content/Areaoffocus/Areaoffocus'
import Award from './Content/Award/Award'
import Enhance from './Content/Enhance/Enhance'
import Vision from './Content/Vision/Vision'
import Footer from './Content/Footer/Footer'
import BlogSection from './Content/Blog/Blog'

const Home = () => {
  return (
    <div>

     
      <Herosection/>
      <Welcomesection/>
      <AreaOfFocus/>
      <Award/>
       <Enhance/>   
       <Vision/>
       <BlogSection/>
       <Footer/>
    </div>
  )
}

export default Home
