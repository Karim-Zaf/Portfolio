"use client";

import React, { useState } from 'react'
import HomePage from './Pages/HomePage';
import About from './Pages/About';
import Projects from './Pages/Projects';
import Navbara from './Navbara';

function MainPage() {
   
    const [page , setPage] = useState("home") ;

  return (
    <>
      <Navbara currentPage={page} setPage={setPage} className="z-50"/>

      <div className='bg-slate-50'>{page}</div>

      {page === "home" && <HomePage />}
      {page === "about" && <About />}
      {page === "projects" && <Projects />}
          
    
               
    </>
  )
}

export default MainPage
