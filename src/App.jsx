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
import AdditionalSkills from './components/AdditionalSkills/AdditionalSkills';


function App(props) {


  return (
    <div className="min-h-screen bg-white text-zinc-900 dark:bg-[#0a0a0a] dark:text-neutral-100">
      <Navbar />
      <Hero />
      <Featurs />
      <Resume />
      <AdditionalSkills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
