import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Menu from './Menu';
import Contact from './Contact';
import Footer from './Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
