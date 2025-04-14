import React from "react";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <motion.section
      id="projects"
      className="py-16 px-6 md:px-16"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-4xl font-bold mb-6 border-b-4 border-blue-500 inline-block dark:text-white">
        Projects
      </h2>
      <p className="text-xl leading-relaxed mt-4 dark:text-gray-300">
        Here are some of the projects I've built using MERN stack and other technologies.
      </p>

      <div className="mt-10 space-y-8">
        {/* Project 1 */}
        <div className="project bg-white dark:bg-gray-800 shadow-md p-6 rounded-lg">
          <h3 className="text-2xl font-semibold mb-2 dark:text-white">
            Intruder Detection & Forest Fire Alert System Using IoT
          </h3>
          <p className="text-gray-700 dark:text-gray-300">
            Developed a real-time monitoring system using <strong>Arduino</strong> & IoT sensors to detect intrusions and fire hazards.
            Integrated wireless communication (<strong>Wi-Fi</strong> & <strong>GSM</strong>) and cloud platform (<strong>ThingSpeak</strong>) for remote alerts and monitoring.
          </p>
        </div>

        {/* Project 2 */}
        <div className="project bg-white dark:bg-gray-800 shadow-md p-6 rounded-lg">
          <h3 className="text-2xl font-semibold mb-2 dark:text-white">Myntra Clone App</h3>
          <p className="text-gray-700 dark:text-gray-300">
            Developed a Myntra Clone App using <strong>HTML, CSS, and JavaScript</strong>, featuring a responsive UI, product catalog,
            shopping cart, and user-friendly navigation. Implemented dynamic content rendering and interactive design to
            enhance the user experience.
          </p>
        </div>

        {/* Project 3 - Portfolio Website */}
        <div className="project bg-white dark:bg-gray-800 shadow-md p-6 rounded-lg">
          <h3 className="text-2xl font-semibold mb-2 dark:text-white">Personal Portfolio Website</h3>
          <p className="text-gray-700 dark:text-gray-300">
            Designed and developed a fully responsive portfolio website using <strong>React</strong> and <strong>Tailwind CSS</strong>. Includes sections like About, Projects,
            Skills, and Contact. Integrated smooth animations using <strong>Framer Motion</strong> and added light/dark mode toggle.
          </p>
          <a
            href="https://github.com/sanju-29/my-portfolio.git"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            View GitHub Repo
          </a>
        </div>

        {/* Project 4 - LIC Registration Form */}
        <div className="project bg-white dark:bg-gray-800 shadow-md p-6 rounded-lg">
          <h3 className="text-2xl font-semibold mb-2 dark:text-white">LIC Insurance Registration Form</h3>
          <p className="text-gray-700 dark:text-gray-300">
            Built a real-world landing and registration form using <strong>React</strong> and <strong>CSS</strong> for LIC Insurance.
            The form collects user details and securely sends the data to a connected <strong>Google Sheet</strong> using a webhook or script integration,
            enabling easy lead collection and real-time updates.
          </p>
          <a
            href="https://github.com/sanju-29/lic-registration-form.git"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            View GitHub Repo
          </a>
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;
