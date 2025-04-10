import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaCode } from "react-icons/fa";
import projectsdata from "../data/projectsdata";

const Project = () => {
    return (
        <section className="py-12 px-4 md:px-16 bg-white dark:bg-gray-900">
            {projectsdata.map((project) => (
                <motion.div
                    key={project.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    className="mb-10 sticky w-full top-20 h-screen rounded-2xl overflow-hidden bg-card  shadow-lg border border-border hover:shadow-[0_5px_20px] hover:shadow-muted flex flex-col md:flex-row gap-4 z-20"
                >
                    {/* Image Section (Placeholder or Static Image) */}
                    <div className="md:basis-4/6 p-4 max-sm:p-2">
                        <div className="h-full rounded-xl overflow-hidden border border-border">
                            <img
                                src="/_next/static/media/1.1e19374c.png"
                                alt={project.title}
                                className="w-full h-full object-cover"
                                loading="lazy"
                            />
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="md:basis-2/6 p-4 flex flex-col justify-between gap-4 max-sm:p-2">
                        <div>
                            <h2 className="text-2xl font-bold mb-2">
                                {project.title}
                            </h2>
                            <p className="text-gray-700 dark:text-gray-300 text-sm max-h-[150px] overflow-y-auto">
                                {project.description}
                            </p>

                            {/* Tech Stack Tags */}
                            <div className="flex flex-wrap gap-2 mt-3">
                                {project.tech.map((tech, index) => (
                                    <span
                                        key={index}
                                        className="px-3 py-1 bg-blue-600 text-white text-sm rounded shadow-md hover:bg-blue-700 transition"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Buttons + Logo */}
                        <div className="flex items-end justify-between">
                            <div className="flex gap-2">
                                <a href={project.repo} target="_blank" rel="noopener noreferrer">
                                    <button className="flex items-center gap-2 bg-blue-600 text-white font-medium px-4 py-2 rounded hover:bg-blue-700 transition">
                                        Code <FaCode className="-translate-y-[2px]" />
                                    </button>
                                </a>
                                <a href={project.live} target="_blank" rel="noopener noreferrer">
                                    <button className="flex items-center gap-2 border px-4 py-2 rounded font-bold text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition">
                                        Demo <FaExternalLinkAlt className="-translate-y-[2px]" />
                                    </button>
                                </a>
                            </div>
                            <img
                                src="/_next/static/media/skill-icons--linux-light.29bbd7b2.svg"
                                alt="Project Logo"
                                className="w-14"
                                loading="lazy"
                            />
                        </div>
                    </div>
                </motion.div>
            ))}
        </section>
    );
};

export default Project;
