import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Services from "./Servies/Services"
import About from "./About/About"
import Careers from "./Careers/Careers"
import Contact from "./Contact/Contact"
import News from "./news/news"
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
import  ProgressBar  from "../progress bar/progress"
export default function CustomRoutes() {
  return (
    <>
  <BrowserRouter>
  <Header/>
    <Routes>
      <Route path='/' element={<About/>}/>
      <Route path='/Services' element={<Services/>}/>
      <Route path='/Careers' element={<Careers/>}/>
      <Route path='/Contact' element={<Contact/>}/>
      <Route path='/News'    element={<News/>}/>
    </Routes>
    <Footer/>
  </BrowserRouter>
    </>
  )
}
