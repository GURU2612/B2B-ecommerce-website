import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Herosection from './Content/Herosection/Herosection.jsx';
import Layout from './Layout .jsx';
import Welcomesection from './Content/Welcomesection/Welcomesection.jsx';
import Aboutussection from './Component/Aboutussection/Aboutussection.jsx';
import Contact from './Content/Contact/Contact.jsx';
import Home from './Component/Home/Home.jsx';
import AreaOfFocus from "./Content/Area of Focus/Areaoffocus.jsx";
import Doctors from "./Component/Doctor/Doctors.jsx";
import DrDetails from "./Component/Dr Details/DrDetails.jsx";
import Career from "./Component/career/Career.jsx";
import Aof from "./Component/AOF/Aof.jsx";
import ContectUs from "@src/Component/Contect Us/ContectUs.jsx";
import Login from "@src/Component/Login/Login.jsx";
import SignUp from "@src/Component/SignUp/SignUp.jsx";
import BlogPage from "@src/Component/BlogPage/BlogPage.jsx";
import BlogDetails from "@src/Content/BlogDetails/BlogDetails.jsx";

import AdminLayout from "@src/AdminLayout.jsx";
import ProductSection from "@src/Admin/ProductSec/ProductSection.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='Home' element={<Home />} />
          <Route path='about' element={<Aboutussection />} />
          <Route path='AreaOfFocus' element={<Aof/>} />
          <Route path='contact' element={<Contact />} />
          <Route path='Doctors' element={<Doctors/>}/>
          <Route path="/doctor-details" element={<DrDetails/>} />
          <Route path="/Career" element={<Career/>} />
          <Route path="/contectUs" element={<ContectUs/>} />
          <Route path="/blogpage" element={<BlogPage/>} />
          <Route path="/blogD" element={<BlogDetails/>} />

        </Route>

        <Route path="/admin" element={<AdminLayout />}>
          <Route path="/admin" element={<ProductSection />} />
        </Route>
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>


    </BrowserRouter>
  );
}

export default App;
