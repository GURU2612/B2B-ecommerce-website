import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout .jsx';
import Aboutussection from './Component/Aboutussection/Aboutussection.jsx';
import Contact from './Content/Contact/Contact.jsx';
import Home from './Component/Home/Home.jsx';
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
import Profile from "@src/Content/ProfilePage/Profile.jsx";
import CTable from "@src/Admin/CareerTable/CTable.jsx";
import AdminContactus from "@src/Admin/Contact Us/AdminContactus.jsx";
import AdminDoc from "@src/Admin/Admin Dr/AdminDoc.jsx";
import AdminBlogEdit from "@src/Admin/AdminBlog/AdminBlogEdit.jsx";
import AdminBlog from "@src/Admin/AdminBlog/AdminBlog.jsx";

function App() {
  return (
    <BrowserRouter>
      {/* Global popup component */}
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
          <Route path="/BlogDetails/:id" element={<BlogDetails/>} />
          <Route path="/profile" element={<Profile/>} />
        </Route>

        <Route path="/admin" element={<AdminLayout />}>
          <Route path="/admin" element={<ProductSection />} />
          <Route path="career" element={<CTable/>} />
          <Route path="contact" element={<AdminContactus/>} />
          <Route path="doctor" element={<AdminDoc/>} />
          <Route path="edit" element={<AdminBlogEdit/>} />
          <Route path="edit/:id" element={<AdminBlogEdit/>} />
          <Route path="blogs" element={<AdminBlog/>} />
        </Route>
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>


    </BrowserRouter>
  );
}

export default App;
