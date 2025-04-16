import React from 'react';
import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white p-4 px-8 flex justify-between items-center shadow-md">
    
      <h1 className="text-4xl font-bold text-blue-400">MyPortfolio</h1>

  
      <div className="flex gap-10 items-center">
        <Link to="/" className="hover:text-blue-400 text-lg font-bold">Home</Link>
        <Link to="/education" className="hover:text-blue-400 text-lg font-bold">Education</Link>
        <Link to="/projects" className="hover:text-blue-400 text-lg font-bold">Projects</Link>
        <Link to="/skills" className="hover:text-blue-400 text-lg font-bold">Skills</Link>
        <Link to="/contact" className="hover:text-blue-400 text-lg font-bold">Contact</Link>
        <ThemeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
