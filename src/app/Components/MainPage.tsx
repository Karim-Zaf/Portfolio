"use client";

import React, { useState } from 'react'
import HomePage from './Pages/HomePage';
import About from './Pages/About';
import Projects from './Pages/Projects';
import Navbara from './Navbara';
import Certificates from './Pages/Certificates';

function MainPage() {
   
    const [page , setPage] = useState("home") ;

  return (
    <div className="z-20" >
      <Navbara currentPage={page} setPage={setPage} className="z-50"/>


      {page === "home" && <HomePage />}
      {page === "about" && <About />}
      {page === "projects" && <Projects />}
          {page === "certificates" && <Certificates />}
    
               
    </div>
  )
}

export default MainPage
