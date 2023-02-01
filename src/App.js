import './App.css';
import Navbar from './component/Navbar';
import Home from './screen/Home';
import About from './screen/About';
import Contact from './screen/Contact';
import { BrowserRouter,  Router, Routes, Route } from'react-router-dom';
import Footer from './component/Footer';

function App() {
  return (

    <div>

    <BrowserRouter>
    <Router> 
       
        <Navbar ></Navbar>
        <Routes>
         <Route path="home" element={<Home />} />
         <Route path="about"  element={<About />} />
         <Route path="contact" element={<Contact />} />
        </Routes>
        <Footer />
     
    </Router>
    </BrowserRouter>  
    </div>
  );
}

export default App;
