import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 py-6 px-6 border-t dark:border-gray-700 text-sm">
      <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-6">
        
        {/* Slightly bigger icons and moved right */}
        <div className="flex space-x-5 text-blue-600 dark:text-blue-400 text-3xl pl-4">
          <a
            href="https://linkedin.com/in/nikhil-n-40a779284"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/sanju-29"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500"
          >
            <FaGithub />
          </a>
          <a
            href="https://instagram.com/nikhill__19"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500"
          >
            <FaInstagram />
          </a>
        </div>

        {/* Footer text */}
        <p className="text-gray-600 dark:text-gray-400 text-center md:text-left">
          © 2025 MyPortfolio. All rights reserved. | Bengaluru, India 🇮🇳
        </p>
      </div>
    </footer>
  );
};

export default Footer;
