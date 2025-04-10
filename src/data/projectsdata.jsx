import Project1 from "../assets/Project/Project1.jpg";
import Project2 from "../assets/Project/Project2.jpg";
import Project3 from "../assets/Project/Project3.jpg";
import Project4 from "../assets/Project/Project4.jpg";
import Project5 from "../assets/Project/Project5.jpg";
import Project6 from "../assets/Project/Project6.jpg";


const projectsdata = [
  {
    id: 1,
    title: "Task 1 - Personal Profile Page",
    description: "A simple and responsive personal profile webpage created using HTML and CSS. It showcases my bio, contact details, and social links with a clean UI design.",
    tech: ["HTML", "CSS"],
    live: "https://harishtask1css.netlify.app/",
    repo: "https://github.com/IT-HARISH-R/task1css",
    img: Project1
  },
  {
    id: 2,
    title: "Task 6 - Product Modal Cart App",
    description: "A React.js application that fetches products from a public API and displays them in a beautiful card layout. Users can view product details inside a modal and add items to their cart. Fully responsive and styled with Tailwind CSS.",
    tech: ["ReactJS", "Tailwind CSS", "JavaScript", "Fake Store API"],
    live: "https://task-6-react.netlify.app/",
    repo: "https://github.com/IT-HARISH-R/Task-6",
    img: Project2
  },
  {
    id: 3,
    title: "Online Event Management Platform",
    description: "A full-stack MERN web application where users can explore, create, and manage events. Includes features like event listings, ticket booking, event scheduling, user authentication, and payment gateway integration using Razorpay. Built with a mobile-first approach and modern UI using Tailwind CSS.",
    tech: [
      "ReactJS", "Node.js", "Express.js", "MongoDB",
      "Tailwind CSS", "Razorpay", "JWT", "Axios", "REST API"
    ],
    live: "https://guvi-event-management-project.netlify.app/",
    repo: "https://github.com/IT-HARISH-R/Event-Management-from-end",
    img: Project3
  },
  {
    id: 4,
    title: "Real-Time Chat Application",
    description: "A real-time chat app built using React, Node.js, Express, and Socket.io. Users can join chat rooms, send and receive messages instantly, and enjoy a smooth communication experience with WebSocket technology. Fully responsive and styled with Tailwind CSS.",
    tech: ["ReactJS", "Node.js", "Express.js", "Socket.io", "Tailwind CSS", "WebSocket"],
    live: "https://chat-application-ue9m.onrender.com/",
    repo: "https://github.com/IT-HARISH-R/chat-application",
    img: Project4
  },
  {
    id: 5,
    title: "SpeakFlow - AI Voice Communication Trainer",
    description: "SpeakFlow is an AI-powered communication trainer that uses Speech-to-Text (STT), intelligent response generation with OpenAI, and Text-to-Speech (TTS) to simulate real-time conversation practice. It helps users improve English fluency, pronunciation, and grammar in an interactive and personalized way.",
    tech: ["ReactJS", "Node.js", "Express.js", "OpenAI API", "Speech Recognition", "Text-to-Speech", "Tailwind CSS"],
    live: "https://speakflow.onrender.com/",
    repo: "https://github.com/IT-HARISH-R/SpeakFlow",
    img: Project5
  },
  {
    id: 6,
    title: "GPC Vanavasi College Website",
    description: "A fully functional website for Government Polytechnic College, Vanavasi. It includes sections like About, Courses, Departments, Staffs, Events, and Contact. Built with a clean, accessible, and responsive design to provide essential information to students and faculty. Includes admin-side CRUD operations using a Node.js backend and MongoDB.",
    tech: ["ReactJS", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "REST API"],
    live: "https://gptv.netlify.app/",
    repo: "https://github.com/IT-HARISH-R/GPTV-frontend",
    img: Project6
  }




  // {
  //   id: 
  //   title: 
  //   description: 
  //   tech:
  //   live: 
  //   repo:
  //   img: 
  // },
  // {
  //   id: 1,
  //   title: "Memory Game",
  //   description: "A fun memory matching game built using HTML, CSS, and JavaScript.",
  //   tech: ["HTML", "CSS", "JavaScript"],
  //   live: "https://task3-memory-game.netlify.app/",
  //   repo: "https://github.com/IT-HARISH-R/Task-3",
  // },

  // {
  //   id: 2,
  //   title: "React Product Modal App",
  //   description: "A React app fetching Fake Store API products with add-to-cart modal.",
  //   tech: ["React", "Tailwind", "API"],
  //   live: "https://task-6-react.netlify.app/",
  //   repo: "https://github.com/IT-HARISH-R/task-6",
  // },
  // {
  //   id: 3,
  //   title: "Event Management Platform",
  //   description: "A full MERN stack project with ticket sales, Razorpay integration, and email notifications.",
  //   tech: ["MERN", "Razorpay", "EmailJS"],
  //   live: "#",
  //   repo: "https://github.com/IT-HARISH-R",
  // },
];

export default projectsdata;
