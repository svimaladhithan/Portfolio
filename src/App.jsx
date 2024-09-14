import React from "react";
import Navbar from "./Components/Navbar";
import Main from "./Components/Main";

import Project1 from "./Assets/Projects/Project1.jpg";
import Project2 from "./Assets/Projects/project2.jpg";
import Project3 from "./Assets/Projects/project3.jpg";
import About from "./Components/About";
import Technologies from "./Components/Technologies";
import Experience from "./Components/Experience";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";

const App = () => {
  const HERO_CONTENT = `
I am a detail-oriented professional transitioning into a Fullstack Developer role, bringing 6 years of technical support experience. Proficient in HTML, CSS, JavaScript, React, and Redux, I also have a strong foundation in backend technologies such as Node.js and Express.js, with MongoDB for robust data management. Eager to leverage my technical skills and user-focused mindset, I aim to create engaging and interactive web experiences that drive innovative software projects and achieve organizational goals.
`;
  const ABOUT_TEXT = `
I am a detail-oriented professional transitioning into a Fullstack Developer role, with 6 years of technical support experience that has honed my problem-solving skills and attention to detail. Proficient in HTML, CSS, JavaScript, React, and Redux, I have also developed a strong foundation in backend technologies such as Node.js and Express.js, and have hands-on experience with MongoDB for robust data management. My journey into web development was driven by a deep curiosity and a passion for creating efficient and user-friendly web applications. I thrive in collaborative environments and am committed to leveraging my technical expertise and user-focused mindset to craft engaging and interactive web experiences that drive innovation and achieve organizational goals. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.
`;
  const EXPERIENCES = [
    {
      year: "2021 - Present",
      role: "Senior Technical Support Specialist",
      company: "Rently Software Development Private Limited",
      description: `
Assisted in designing and implementing responsive user interfaces using HTML, CSS, and JavaScript. Implemented RESTful APIs and integrated with MongoDB databases. Actively participated in Agile practices, including retrospectives, daily stand-ups, and cross-functional team activities with back-end developers and UI/UX experts.
`,
      technologies: ["HTML", "CSS", "JavaScript"],
    },
    {
      year: "2020 - 2021",
      role: "Process Executive",
      company: "Prakash Kochar & Co",
      description: `
Maintained high quality standards through regular audits, reducing error rates. Implemented continuous improvement initiatives, leading to time savings and optimized resources. Collaborated with peers to measure and adjust process performance based on data.
`,
      technologies: ["Excel"],
    },
    {
      year: "2018 - 2019",
      role: "Customer Support Representative",
      company: "Amazon Development Center Private Limited",
      description: `
I delivered primary support to internal and external customers, efficiently addressing their needs. As a Subject Matter Expert, I guided colleagues in resolving complex issues. I created and managed team communications and meeting materials. My role significantly improved support team coordination and effectiveness. My proactive approach contributed to enhanced customer satisfaction.`,
      technologies: [],
    },
  ];

  const PROJECTS = [
    {
      title: "Inventory Management System",
      image: Project1,
      description: `
A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.
`,
      technologies: [
        "HTML",
        "Tailwind CSS",
        "React",
        "Express.js",
        "Node.js",
        "MongoDB",
      ],
      link: 'https://main--inventorystop.netlify.app/',
      code: 'https://github.com/svimaladhithan/InventoryManagementSystem-Frontend'
    },
    {
      title: "Widgets Dashboard App",
      image: Project2,
      description: `
An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.
`,
      technologies: ["HTML", "CSS", "Angular", "Firebase"],
      link: 'https://main--widgetdashboard.netlify.app/',
      code: 'https://github.com/svimaladhithan/Widgets-dashboard'
    },
    {
      title: "Portfolio Website",
      image: Project3,
      description: `
A personal portfolio website showcasing projects, skills, and contact information.
`,
      technologies: ["HTML", "CSS", "React", "Tailwind CSS"],
      link: 'https://main--vimaladhithanportfolio.netlify.app/',
      code: 'https://github.com/svimaladhithan/Portfolio'
    },
  ];

  const CONTACT = {
    address: "17H Mahalakshmi Nagar, Gobichettipalayam",
    phoneNo: "+91 8220591940",
    email: "vimaladhithan007@gmail.com",
  };

  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>

      <div className="container mx-auto px-8">
        <Navbar />
        <Main hero={HERO_CONTENT} />
        <About about={ABOUT_TEXT}/>
        <Technologies />
        <Experience experience={EXPERIENCES}/>
        <Projects projects={PROJECTS}/>
        <Contact contact={CONTACT}/>
      </div>
    </div>
  );
};

export default App;
