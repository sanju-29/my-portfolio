import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();

  return (
    <section id="about" className="bg-[#0f172a] text-white py-16 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left: Text Content */}
        <div className="md:w-1/2 space-y-6">
          <motion.h1
            className="text-4xl md:text-5xl font-bold"
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            Hi, I'm <span className="text-blue-400">Nikhil N</span>
          </motion.h1>
          <motion.h2
            className="text-xl text-blue-300"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            MERN Stack Developer
          </motion.h2>
          <motion.p
            className="text-md text-gray-300"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Passionate <strong>MERN Developer</strong> skilled in
            <strong> MongoDB</strong>, <strong>Express.js</strong>,
            <strong> React.js</strong>, and <strong>Node.js</strong>. Focused on building scalable apps and seeking
            <strong> growth-driven opportunities</strong>.
          </motion.p>
          <div className="flex gap-4 mt-4">
            <button
              onClick={() => navigate('/hire-me')}
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md font-semibold transition"
            >
              Hire Me
            </button>

            <a
              href="https://wa.me/91829626251"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-blue-400 text-blue-400 px-6 py-2 rounded-md font-semibold hover:bg-blue-400 hover:text-white transition"
            >
              Let's Talk
            </a>
          </div>
        </div>

        {/* Right: Profile Image with enhanced styling */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative group"
        >
          <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-transparent bg-gradient-to-br from-blue-500 to-purple-500 p-[3px] group-hover:scale-105 transition-transform duration-500 shadow-2xl">
            <div className="w-full h-full rounded-full overflow-hidden bg-gray-900">
              <img
                src="/profile.jpg.jpeg"
                alt="Profile"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
