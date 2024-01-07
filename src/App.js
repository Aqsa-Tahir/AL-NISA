import './App.css';
import { BrowserRouter, Routes, Route, } from 'react-router-dom'
import Home from './Pages/Home';
import Base from './Component/Layout/Base';
import About from './Component/Element/About';
import Contact from './Component/Element/Contact';
import Servises from './Component/Element/Servises';
import Register from './Component/Element/Register';
import Login from './Component/Element/Login';
import '@fortawesome/fontawesome-free/css/all.css';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Dashboard from './Component/Element/Dashboard';


function App() {
  useEffect(() => {
    AOS.init();
  }, [5000]);
  
  return (
    <div>
      <BrowserRouter>
        <Base>
          <Routes>
            <Route path='/' index element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path='/about' index element={<About />} />
            <Route path='/contact' index element={<Contact />} />
            <Route path='/services' index element={<Servises />} />
            <Route path='/dashboard' index element={<Dashboard />} />




          </Routes>
        </Base>
      </BrowserRouter>
    </div>
  );
}

export default App;
