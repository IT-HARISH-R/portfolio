import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowDown, FaArrowRight, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import heroImg from "../assets/heroimg.jpg";

const Home = () => {
    return (
        <section className=" bg-white dark:bg-gray-900 ">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-16 gap-12 min-h-[90vh] bg-white dark:bg-gray-900 transition-all duration-500">
                {/* Left Content */}
                <motion.div
                    className="flex-1 text-center md:text-left"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 text-gray-900 dark:text-white">
                        Hey, I'm <span className="text-blue-600 dark:text-blue-400">Harish</span>
                    </h1>
                    <h2 className="text-xl md:text-2xl font-semibold mb-6 bg-gradient-to-r from-blue-500 to-indigo-600 text-transparent bg-clip-text">
                        Full Stack MERN Developer 🚀
                    </h2>
                    <p className="text-gray-700 dark:text-gray-400 text-base md:text-lg mb-8 max-w-xl leading-relaxed">
                        I build performant, responsive, and visually appealing web applications using the MERN stack. I enjoy solving real-world problems with clean architecture, modern UI, and intuitive UX.
                    </p>

                    <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-6">
                        <a
                            href="https://drive.google.com/file/d/1QzmhDK7-2FjpwNB5SInFwIKcwYJjPdoy/view?usp=sharing"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-all duration-300"
                        >
                            <FaArrowDown className="text-sm" />
                            Download Resume
                        </a>
                        <Link
                            to="/projects"
                            className="inline-flex items-center gap-2 px-6 py-3 border border-blue-600 text-blue-600 font-semibold rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300"
                        >
                            <FaArrowRight className="text-sm" />
                            View Projects
                        </Link>
                    </div>

                    {/* Social Icons */}
                    <div className="flex justify-center md:justify-start space-x-5">
                        <a
                            href="https://github.com/IT-HARISH-R"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-2xl text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition transform hover:scale-110"
                        >
                            <FaGithub />
                        </a>
                        <a
                            href="https://linkedin.com/in/harishdeveloper"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-2xl text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition transform hover:scale-110"
                        >
                            <FaLinkedin />
                        </a>
                        <a
                            href="https://instagram.com/itz.harish_2729"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-2xl text-gray-700 dark:text-gray-300 hover:text-pink-500 transition transform hover:scale-110"
                        >
                            <FaInstagram />
                        </a>
                    </div>
                </motion.div>

                {/* Right Image */}
                <motion.div
                    className="flex-1"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <img
                        src={heroImg}
                        alt="Harish - Developer"
                        className="rounded-full w-72 h-72 md:w-96 md:h-96 object-cover mx-auto shadow-xl ring-4 ring-blue-500 dark:ring-blue-400 transition-all duration-500"
                    />
                </motion.div>
            </div>
        </section>
    );
};

export default Home;
