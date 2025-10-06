import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `A creative developer who loves building beautiful and functional projects. I combine technical skills with artistic flair to create unique digital experiences.
`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "09/09/2025 - Present",
    role: "Software Engineer Intern",
    company: "Cravita Technologies India Private Limited, Pune, Maharashtra",
    description: `
Selected for a 6-month structured internship program with training and live project development.
Currently working on building and optimizing modern web applications that focus on performance and user experience. Involved in designing RESTful APIs for smooth and secure data flow while collaborating with teams to deliver reliable and high-quality software solutions.

`,
    technologies: [
      "HTML",
      "CSS",
      "Tailwind",
      "JavaScript",
      "React",
      "Node.js",
      "TypeScript",
      "Express.js",
      "Next.js",
      "MongoDB",
      "PostgreSQL",
    ],
  },
  {
    year: "06/08/2024 - 06/02/2025",
    role: "Backend Developer Intern",
    company: "ByteUpRise, Nagpur, Maharashtra, India",
    description: `Worked on designing and implementing scalable backend systems, focusing on building robust RESTful APIs and efficient data management solutions. Collaborated closely with cross-functional teams to deliver high-quality software while leveraging modern backend technologies for optimal performance.`,
    technologies: [
      "Node.js",
      "TypeScript",
      "Express.js",
      "MongoDB",
      "PostgreSQL",
    ],
  },
  {
    year: "01/01/2024 - 01/06/2024",
    role: "Trainee ML Intern",
    company: "SohamGlobal India Private Limited, Amravati, Maharashtra",
    description: `Assisted in developing web applications and data-driven solutions, focusing on implementing efficient data storage and management strategies. Collaborated with product managers and cross-functional teams to prioritize features and enhance application performance, gaining hands-on experience in machine learning workflows.`,
    technologies: ["Python", "Pandas", "NumPy", "MongoDB", "Scikit-learn"],
  },
];

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
  },
  {
    title: "Task Management App",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["HTML", "CSS", "Angular", "Firebase"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "Blogging Platform",
    image: project4,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  },
];

export const CONTACT = {
  address: "767 Fifth Avenue, New York, NY 10153 ",
  phoneNo: "+12 4555 666 00 ",
  email: "me@example.com",
};
