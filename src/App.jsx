import React from 'react'
import Box from "./assets/BoxAnimation"
import NavBar from './Components/Header/NavBar'
import Home from './Components/Home'
import AboutUs from './Components/AboutUs'
import Services from './Components/Services'
import Protfolio from './Components/Protfolio'
import ContactUs from './Components/ContactUs'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'odometer/themes/odometer-theme-default.css';
const App = () => {
  return (
    <div className='overflow-hidden'>
        <NavBar/>
        <Home/>
        <AboutUs/>
        <Services/>
        <Protfolio/>
        <ContactUs/>
      </div>
  )
}

export default App