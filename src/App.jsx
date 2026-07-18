import React from 'react';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import About from './Components/About'
import Services from './Components/Services'
import Gallery from './Components/Gallery'
import Contact from './Components/Contact'
import Book from './Components/Book'
import Footer from './Components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Gallery />
      <Contact />
      <Book />
      <Footer />
     
    </div>
  );
}

export default App;