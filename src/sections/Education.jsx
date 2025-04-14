
import React from 'react';
import { motion } from 'framer-motion';

const Education = () => {
  return (
    <motion.section
      id="education"
      className="py-12 px-6 md:px-16"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl font-bold mb-8 border-b-4 border-blue-500 inline-block dark:text-white">
        Education
      </h2>

      {/* Degree Section */}
      <div className="mb-6">
        <p className="text-xl font-semibold dark:text-white">Bachelor of Engineering in Electronics and Communication</p>
        <p className="text-gray-700 dark:text-gray-300">
          Cauvery Institute of Technology, Mandya | 2020 - 2024
        </p>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          Gained good knowledge on embedded systems and modern web technologies.
        </p>
      </div>

      {/* PUC Section */}
      <div className="mb-6">
        <p className="text-xl font-semibold dark:text-white">Pre-University Course (PUC)</p>
        <p className="text-gray-700 dark:text-gray-300">
          Mandavya Excellence PU College, Mandya | 2018 - 2020
        </p>
      </div>

      {/* SSLC Section */}
      <div>
        <p className="text-xl font-semibold dark:text-white">Secondary School Leaving Certificate (SSLC)</p>
        <p className="text-gray-700 dark:text-gray-300">
          Govt. Junior College (Ex-Municipal), Mandya | 2018
        </p>
      </div>
    </motion.section>
  );
};

export default Education;
