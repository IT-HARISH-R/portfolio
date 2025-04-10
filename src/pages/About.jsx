import React from "react";
import { Element } from "react-scroll";
import { motion } from "framer-motion";

// Animation variants for each paragraph
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const About = () => {
  const paragraphs = [
    `Hello! I'm Harish, a passionate and self-taught MERN Stack Developer from Salem District, Tamil Nadu. I started my journey into full-stack development after completing my diploma in Electrical and Electronics Communication Engineering, and I’ve been building ever since!`,

    `My tech stack includes HTML, CSS, JavaScript, ReactJS, TailwindCSS, Node.js, Express.js, MongoDB, and Git. I’ve built projects like an Income Expense Tracker, Event Management Platform, Portfolio Website, and even an upcoming Voice AI Trainer called SpeakFlow.`,

    `I focus on writing clean, maintainable code and designing responsive, user-friendly interfaces. I love learning new tools and tackling real-world problems through web apps.`,

    `Currently, I’m enrolled in the GUVI MERN Stack course (Tamil Batch FSD-WD-T-B11) and constantly leveling up my skills. You can check out my work on GitHub.`,

    `I'm actively seeking opportunities to contribute to real-world projects and grow as a developer. Let’s connect and build something great!`,
  ];

  return (
    <Element
      name="about"
      className="py-16 px-4 sm:px-6 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white"
    >
      <motion.div
        className="max-w-4xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.h2
          className="text-3xl sm:text-4xl font-bold mb-6 text-blue-600 dark:text-blue-400"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          About Me
        </motion.h2>

        {paragraphs.map((text, index) => (
          <motion.p
            key={index}
            custom={index}
            variants={fadeInUp}
            className="mt-4 text-base sm:text-lg leading-7"
          >
            {text.includes("GitHub") ? (
              <>
                Currently, I’m enrolled in the GUVI MERN Stack course (Tamil Batch
                FSD-WD-T-B11) and constantly leveling up my skills. You can check out
                my work on{" "}
                <a
                  href="https://github.com/IT-HARISH-R"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline hover:text-blue-700 transition-colors duration-300"
                >
                  GitHub
                </a>
                .
              </>
            ) : (
              text
            )}
          </motion.p>
        ))}
      </motion.div>
    </Element>
  );
};

export default About;
