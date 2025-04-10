import { motion } from "framer-motion";
import {
    FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt,
    FaDatabase, FaGithub
} from "react-icons/fa";
import {
    SiTailwindcss, SiExpress, SiMongodb, SiPostman,
    SiVite, SiRedux, SiRender, SiMysql,
    SiNetlify, SiRazorpay, SiOpenai, SiReactrouter, SiMongoose,
    SiFirebase, SiTypescript
} from "react-icons/si";
import { DiVisualstudio } from "react-icons/di";
import { MdApi } from "react-icons/md";
import { TbBrandOpenai } from "react-icons/tb";

const categories = [
    {
        title: "Frontend Development",
        skills: [
            { icon: <FaHtml5 />, name: "HTML" },
            { icon: <FaCss3Alt />, name: "CSS" },
            { icon: <SiTailwindcss />, name: "Tailwind CSS" },
            { icon: <FaJs />, name: "JavaScript" },
            // { icon: <SiTypescript />, name: "TypeScript" },
            { icon: <FaReact />, name: "ReactJS" },
            { icon: <SiReactrouter />, name: "React Router" },
            { icon: <SiRedux />, name: "Redux" },
            // { icon: <MdApi />, name: "UI/UX Principles" },
        ]
    },
    {
        title: "Backend Development",
        skills: [
            { icon: <FaNodeJs />, name: "Node.js" },
            { icon: <SiExpress />, name: "Express.js" },
            { icon: <SiMongodb />, name: "MongoDB" },
            { icon: <SiMongoose />, name: "Mongoose" },
            { icon: <SiFirebase />, name: "Firebase (Auth/DB)" },
            { icon: <MdApi />, name: "REST APIs" },
        ]
    },
    {
        title: "Version Control & Deployment",
        skills: [
            { icon: <FaGitAlt />, name: "Git" },
            { icon: <FaGithub />, name: "GitHub" },
            { icon: <SiNetlify />, name: "Netlify" },
            { icon: <SiRender />, name: "Render" },
        ]
    },
    {
        title: "API Integration",
        skills: [
            { icon: <MdApi />, name: "Fake Store API" },
            { icon: <MdApi />, name: "OMDB API" },
            { icon: <SiRazorpay />, name: "Razorpay" },
            { icon: <SiOpenai />, name: "OpenAI API" },
        ]
    },
    {
        title: "Tools & Platforms",
        skills: [
            { icon: <SiPostman />, name: "Postman" },
            { icon: <DiVisualstudio />, name: "VS Code" },
            { icon: <TbBrandOpenai />, name: "ChatGPT" },
        ]
    },
    {
        title: "Database",
        skills: [
            { icon: <FaDatabase />, name: "MySQL (Basic)" },
            { icon: <SiMongodb />, name: "MongoDB" },
            { icon: <FaDatabase />, name: "NoSQL" }]
    }
];

const Skills = () => {
    return (
        <section className="min-h-screen px-4 py-12 sm:px-8 md:px-16 bg-gray-50 dark:bg-[#0f172a] transition-colors duration-300">
            <motion.h2
                className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-16"
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                Technical Skills
            </motion.h2>

            <div className="space-y-16 container mx-auto">
                {categories.map((category, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: i * 0.2 }}
                    >
                        <h3 className="text-2xl font-semibold text-gray-700 dark:text-gray-200 mb-8">
                            {category.title}
                        </h3>

                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                            {category.skills.map((skill, index) => (
                                <motion.div
                                    key={index}
                                    className="flex flex-col items-center bg-white dark:bg-gray-900 p-5 rounded-2xl shadow-md hover:shadow-2xl hover:shadow-blue-500/30 transition-transform duration-300 hover:scale-105 group w-28 sm:w-32"
                                    initial={{ opacity: 0, scale: 0.7 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.4, delay: index * 0.05 }}
                                >
                                    <div className="text-4xl text-blue-600 dark:text-blue-400 mb-2 group-hover:animate-bounce">
                                        {skill.icon}
                                    </div>
                                    <p className="text-sm text-center font-medium text-gray-800 dark:text-gray-200">
                                        {skill.name}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
