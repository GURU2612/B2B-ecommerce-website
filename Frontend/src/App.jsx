import { useState } from 'react'
import "@fontsource/raleway"; // Default weight (400)
import './App.css'
import Navbar from './Content/Navbar/Navbar'
import Toplink from './Content/Navbar/Toplink'
import Herosection from './Content/Herosection/Herosection'
import Aboutussection from './Content/Aboutussection/Aboutussection'
import Areaoffocus from './Content/Areaoffocus/Areaoffocus'
import AdvisorSection from './Content/AdvisorSection/AdvisorSection'
import Award from './Content/Award/Award'
import Product from './Content/Product/Product'
import Enhance from './Content/Enhance/Enhance';
import Vision from './Content/Vision/Vision';
import Blog from './Content/Blog/Blog';
import Footer from './Content/Footer/Footer';








function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Toplink/>    
      <Navbar/>    
      <Herosection/>
      <Aboutussection/>
      <Areaoffocus/>
      <AdvisorSection/>
      <Product/>
      <Award/> 
      <Enhance/>
      <Vision/>
      <Blog/>
      <Footer/>

      
    </>
  )
}

export default App
