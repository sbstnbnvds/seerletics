import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { AboutUs } from './components/AboutUs';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
//import { Pricing } from './components/Pricing';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Home } from './components/pages/Home'
import { PricingPage } from './components/pages/PricingPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { LogoSlider } from './components/LogoSlider';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <AboutUs />
      <Services />
      <LogoSlider />
      <Portfolio />
      {/*<Pricing />*/}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
