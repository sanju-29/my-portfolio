import React from "react";
import { motion } from "framer-motion";
import {
  FaUser,
  FaBirthdayCake,
  FaGlobeAsia,
  FaLanguage,
  FaEnvelope,
  FaPhone,
  FaFileDownload
} from "react-icons/fa";

const Contact = () => {
  const resumeLink = "/resume.pdf.pdf"; // Make sure this file is in the public folder

  return (
    <motion.section
      id="contact"
      className="py-16 px-6 md:px-16"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-4xl font-bold mb-6 border-b-4 border-blue-500 inline-block">Contact</h2>
      <p className="text-xl leading-relaxed mt-4">
        Here's my personal details :
      </p>

      <div className="mt-8 space-y-4 text-lg">
        <p className="flex items-center gap-3"><FaUser className="text-blue-500" /> <strong>Name:</strong> Nikhil N</p>
        <p className="flex items-center gap-3"><FaBirthdayCake className="text-pink-500" /> <strong>Date of Birth:</strong> 29-07-2001</p>
        <p className="flex items-center gap-3"><FaGlobeAsia className="text-green-500" /> <strong>Nationality:</strong> Indian</p>
        <p className="flex items-center gap-3"><FaLanguage className="text-purple-500" /> <strong>Languages Known:</strong> Kannada, English, Hindi </p>
        <p className="flex items-center gap-3"><FaEnvelope className="text-red-500" /> <strong>Email:</strong> nikhilsanju19@gmail.com</p>
        <p className="flex items-center gap-3"><FaPhone className="text-yellow-500" /> <strong>Phone Number:</strong> +91-8296262541</p>
      </div>

      <div className="mt-8">
        <a
          href={resumeLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition duration-300"
        >
          <FaFileDownload />
          View Resume
        </a>
      </div>
    </motion.section>
  );
};

export default Contact;
