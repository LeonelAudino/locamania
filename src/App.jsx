import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Designs from './pages/Designs';
import Info from './pages/Info';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

export default function () {
  return (
    <div>
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path='/' element={ <Home />}></Route>
        <Route path='/diseños' element={ <Designs />}></Route>
        <Route path='/info' element={ <Info />}></Route>
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </div>
  )
}
