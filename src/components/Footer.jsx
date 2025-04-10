import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 py-6 ">
      <div className="flex flex-col md:flex-row justify-between items-center px-6 max-w-6xl mx-auto">
        <p className="text-sm text-gray-700 dark:text-gray-300">&copy; 2025 Harish. All rights reserved.</p>
        <div className="flex space-x-4 mt-2 md:mt-0">
          <a href="https://github.com/IT-HARISH-R" target="_blank" className="text-xl text-gray-700 dark:text-gray-300 hover:text-blue-500"><FaGithub /></a>
          <a href="https://linkedin.com/in/harishdeveloper" target="_blank" className="text-xl text-gray-700 dark:text-gray-300 hover:text-blue-500"><FaLinkedin /></a>
          <a href="https://instagram.com/itz.harish_2729" target="_blank" className="text-xl text-gray-700 dark:text-gray-300 hover:text-pink-500"><FaInstagram /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
