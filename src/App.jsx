import React from 'react'
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Navbar/Hero';
import Services from './components/Navbar/Services';
import About from './components/Navbar/About';
import Restaurant from './components/Navbar/Restaurant';

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Restaurant />
    </div>
  );
};

export default App;