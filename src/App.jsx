import React from 'react';
import { Routes, Route } from 'react-router-dom'; // ✅ No BrowserRouter here
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './sections/About';
import Education from './sections/Education';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Contact from './sections/Contact';
import HireMe from './sections/HireMe';
import LetsTalk from './sections/LetsTalk';

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pb-[80px]">
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/education" element={<Education />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/hire-me" element={<HireMe />} />
          <Route path="/lets-talk" element={<LetsTalk />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
