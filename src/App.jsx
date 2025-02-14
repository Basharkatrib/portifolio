import { useState } from 'react';
import './index.css';
import { Collapse, Dropdown, initTWE } from "tw-elements";
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import Featurs from './components/Features/Features';
import Resume from './components/Resume/Resume';
import Slider from './components/Slider/Slider';
import Contact from './components/Contact/Contact';


function App(props) {
 

  return (
    <>
    <Navbar />
    <Hero />
    <Featurs />
    <Resume />
    <Contact />
    <Footer />
    </>
  );
}

export default App;
