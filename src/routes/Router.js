import React from 'react'
import  Home from '../pages/Home'
import { BrowserRouter, Routes, Route } from "react-router-dom";
// conponents
import Careers from '../components/Footer/Careers';
import Apply from '../components/Footer/Apply';




const Router = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Home/>} /> 
        {/* footer */}
        <Route path="/careers" element={<Careers />} />
        <Route path="/apply" element={<Apply />} />
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default Router
