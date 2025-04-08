import { useState } from 'react'
import "@fontsource/raleway"; // Default weight (400)
import './App.css'
import Navbar from './Content/Navbar/Navbar'
import Toplink from './Content/Navbar/Toplink'
import Herosection from './Content/Herosection/Herosection'
import Welcomesection from './Content/Welcomesection/Welcomesection'
import Areaoffocus from './Content/Areaoffocus/Areaoffocus'
import AdvisorSection from './Content/AdvisorSection/AdvisorSection'
import Award from './Content/Award/Award'
import Product from './Content/Product/Product'
import Enhance from './Content/Enhance/Enhance';
import Vision from './Content/Vision/Vision';
import Blog from './Content/Blog/Blog';
import Footer from './Content/Footer/Footer';
import Valuesection from './Content/ValueSection/Valuesection';
import Banner from './Content/AboutusBanner/Banner';
import Aboutussection from './Content/Aboutussection/Aboutussection';
import Recognition from './Content/Recognition/Recognition';
import Management from './Content/Management/Management';
import Evolution from './Content/Evolution/Evolution';
import Contact from './Content/Contact/Contact';







function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Toplink/>    
      <Navbar/>    
      <Contact/>
      {/* <Herosection/>
      <Welcomesection/>
      <Areaoffocus/>
      <AdvisorSection/>
      <Product/>
      <Award/> 
      <Enhance/>
      <Vision/>
      <Blog/> */}
      {/* <Banner/> */}
      {/* <Aboutussection/>
      <Valuesection/>
      <Recognition/> 
      <Management/> 
      <Evolution/>
      <Blog/> */}
      {/* <Footer/>  */}

      
      


      
    </>
  )
}

export default App
