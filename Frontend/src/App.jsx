import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Herosection from './Content/Herosection/Herosection.jsx';
import Layout from './Layout .jsx';
import Welcomesection from './Content/Welcomesection/Welcomesection.jsx';
import Aboutussection from './Content/Aboutussection/Aboutussection.jsx';
import Contact from './Content/Contact/Contact.jsx';
import Home from './Component/Home/Home.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Herosection />} />
          <Route path='Home' element={<Home />} />
          <Route path='about' element={<Aboutussection />} />
          <Route path='contact' element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
