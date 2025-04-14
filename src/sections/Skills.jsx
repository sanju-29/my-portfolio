import React from 'react';
import { motion } from 'framer-motion';
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaFigma,
  FaFileWord,
  FaFileExcel,
  FaFilePowerpoint,
} from 'react-icons/fa';
import {
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiMongoose,
  SiPostman,
  SiJsonwebtokens,
} from 'react-icons/si';

const Skills = () => {
  return (
    <motion.section
      id="skills"
      className="py-12 px-6 md:px-16"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl font-bold mb-6 border-b-4 border-blue-500 inline-block text-black dark:text-white">
        Skills
      </h2>
      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-black dark:text-white mt-6">
        <li className="flex items-center gap-2">
          <FaHtml5 className="text-orange-600 text-2xl" /> HTML
        </li>
        <li className="flex items-center gap-2">
          <FaCss3Alt className="text-blue-600 text-2xl" /> CSS
        </li>
        <li className="flex items-center gap-2">
          <FaJsSquare className="text-yellow-400 text-2xl" /> JavaScript
        </li>
        <li className="flex items-center gap-2">
          <FaReact className="text-cyan-400 text-2xl" /> React.js
        </li>
        <li className="flex items-center gap-2">
          <FaNodeJs className="text-green-600 text-2xl" /> Node.js
        </li>
        <li className="flex items-center gap-2">
          <SiExpress className="text-gray-300 text-2xl" /> Express.js
        </li>
        <li className="flex items-center gap-2">
          <SiMongodb className="text-green-500 text-2xl" /> MongoDB
        </li>
        <li className="flex items-center gap-2">
          <SiTailwindcss className="text-blue-400 text-2xl" /> Tailwind CSS
        </li>
        <li className="flex items-center gap-2">
          <SiMongoose className="text-red-400 text-2xl" /> Mongoose
        </li>
        <li className="flex items-center gap-2">
          <FaGithub className="text-white bg-black rounded-full p-1 text-2xl" /> GitHub
        </li>
        <li className="flex items-center gap-2">
          <SiPostman className="text-orange-500 text-2xl" /> Postman
        </li>
        <li className="flex items-center gap-2">
          <FaFigma className="text-pink-500 text-2xl" /> Figma
        </li>
        <li className="flex items-center gap-2">
          <SiJsonwebtokens className="text-purple-500 text-2xl" /> JWT Auth
        </li>
        <li className="flex items-center gap-2">
          <FaFilePowerpoint className="text-red-500 text-2xl" /> MS PowerPoint
        </li>
        <li className="flex items-center gap-2">
          <FaFileWord className="text-blue-500 text-2xl" /> MS Word
        </li>
        <li className="flex items-center gap-2">
          <FaFileExcel className="text-green-600 text-2xl" /> MS Excel
        </li>
      </ul>
    </motion.section>
  );
};

export default Skills;
