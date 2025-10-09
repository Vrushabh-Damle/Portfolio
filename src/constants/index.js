import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";

export const HERO_CONTENT = `A creative developer who loves building beautiful and functional projects. I combine technical skills with artistic flair to create unique digital experiences.
`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "12/09/2025 - Present",
    role: "Junior Software Engineer",
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
    title: "🧠 Alzheimer – Your Second Brain",
    image: project1,
    description:
      "Alzheimer is a Second Brain application that lets you collect and organize content from multiple sources — such as Twitter, YouTube, and Google Docs — into a centralized knowledge hub, Not only this even you can share your brain with others with just one link and a simple click. ",
    githubLink: "https://github.com/Vrushabh-Damle/Alzheimer",
    technologies: [
      "Tailwind",
      "React",
      "Node.js",
      "TypeScript",
      "Express.js",
      "MongoDB",
    ],
  },
  {
    title: "🎓 Skillio – Course Selling Application",
    image: project2,
    description:
      "Skillio is a full-stack course-selling platform designed to connect learners and instructors. The backend, built with Node.js, Express.js, and MongoDB, powers secure user authentication, course management, and payment processing. The frontend (in development) will offer an engaging interface for exploring, purchasing, and managing courses.",
    githubLink: "https://github.com/Vrushabh-Damle/Skillio",
    technologies: ["Node.js", "Express.js", "MongoDB", "React.js"],
  },

  {
    title: "🍔 FoodVilla – Food Delivery Web Application",
    image: project3,
    description:
      "FoodVilla is a responsive and visually appealing food delivery web application built with React and Tailwind CSS. It allows users to browse restaurants, explore menus, and place orders through an intuitive interface. The backend (in progress) will be developed using Node.js, Express.js, and MongoDB to enable real-time order management and secure data handling.",
    githubLink: "https://github.com/Vrushabh-Damle/foodvilla",
    technologies: [
      "React.js",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
  },
];

export const CONTACT = {
  address: "Pune, Maharashtra, India",
  phoneNo: "8390949242",
  email: "dwrushabh@gmail.com",
};
