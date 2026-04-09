import { useEffect } from 'react';
import './index.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import WhatsAppButton from './components/WhatsAppButton/WhatsAppButton';

function App() {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
    
    // Prevent scroll restoration
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#0c1222] text-gray-900 dark:text-white transition-colors duration-300">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
