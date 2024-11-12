"use client";

import React, { useState } from 'react'
import HomePage from './Pages/HomePage';
import About from './Pages/About';
import Projects from './Pages/Projects';

function MainPage() {

    const [page , setPage] = useState("home") ;

  return (
    <>
      {page === "home" && <HomePage />}
      {page === "about" && <About />}
      {page === "projects" && <Projects />}
          
    
               
    </>
  )
}

export default MainPage
