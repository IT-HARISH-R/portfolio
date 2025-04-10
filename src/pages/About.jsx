import { motion } from "framer-motion";

const About = () => {
    return (
        <section className="min-h-[90vh] p-6 md:p-16 bg-white dark:bg-gray-900 transition-all duration-500 flex flex-col gap-10 justify-center">
            {/* Title */}
            <motion.h2
                className="text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-white"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                About Me
            </motion.h2>

            {/* Content */}
            <motion.div
                className="max-w-5xl mx-auto text-lg text-gray-700 dark:text-gray-300 leading-relaxed space-y-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
            >
                <p>
                    Hey there! 👋 I'm <span className="font-bold text-blue-600 dark:text-blue-400">Harish</span> from <span className="font-medium">Mettur, Salem District, Tamil Nadu</span>.
                    I’m a dedicated, self-taught <span className="font-semibold">Full Stack Developer</span> currently pursuing the MERN stack course via <span className="italic">Guvi</span>, and constantly building and learning on my own.
                </p>

                <p>
                    My tech stack includes:
                    <span className="font-medium text-gray-900 dark:text-white"> React, Tailwind CSS, JavaScript, Node.js, Express, and MongoDB</span>. I've worked on several projects like a memory game 🧠, an income-expense tracker 💰, an API-based product app 🛍️, and a fully-featured online event platform 🎉.
                </p>

                <p>
                    I enjoy turning problems into solutions with clean, scalable code. Platforms like <span className="font-semibold">CodeKata</span> help me sharpen my algorithmic thinking, and I also explore tools like GitHub, Netlify, Postman, and Render for real-world project deployment.
                </p>

                <p>
                    Beyond coding, I believe in consistent self-improvement, strong communication, and teamwork. My current goal is to land a meaningful role where I can <span className="font-semibold">contribute, grow, and innovate</span> as part of a passionate team.
                </p>

                <p className="pt-2 text-center font-medium text-gray-800 dark:text-white">
                    🚀 Let’s collaborate and build impactful digital experiences together!
                </p>
            </motion.div>
        </section>
    );
};

export default About;
