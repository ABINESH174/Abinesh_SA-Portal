
import proj2 from "../assets/projects/CodeEditor.png";
import proj1 from "../assets/projects/AccetConnect.jpg";
import proj3 from "../assets/projects/employee-management-system-project.webp";
import proj4 from "../assets/projects/BankingApp.png";
import proj5 from "../assets/projects/assignment-screens.jpg";



export const HERO_CONTENT = `     Hello! I'm a passionate software developer and a lifelong learner. From creating web and desktop applications to mastering Git version control, I thrive on building efficient and innovative solutions. My journey has been driven by hands-on experience, where every project has been a step forward in expanding my skills. Beyond tech, I'm an NCC cadet and an athlete who values discipline, teamwork, and precision. I aim to leverage my expertise to attract meaningful opportunities and contribute to impactful projects`;

export const ABOUT_TEXT ={
  abtWebDev:"  Skilled in ReactJS (frontend) with Node.js and Spring Boot (backend), combined with MySQL database expertise to build robust full-stack applications.",
  abtDeskDev:" Experienced with JavaFX for crafting desktop applications supported by Spring Boot and MySQL integration.",
  abtVerCon:"  Proficient in Git, ensuring seamless collaboration and code management.",
  abtLearnSpirit:"  Currently delving into DevOps (Docker) and Data Science (Python) to broaden my technical horizon.",
}
//  `
// Web Development:Skilled in ReactJS (frontend) with Node.js and Spring Boot (backend), combined with MySQL database expertise to build robust full-stack applications.
// Desktop Development: Experienced with JavaFX for crafting desktop applications supported by Spring Boot and MySQL integration.
// Version Control: Proficient in Git, ensuring seamless collaboration and code management.
// Learning Spirit: Currently delving into DevOps (Docker) and Data Science (Python) to broaden my technical horizon.`;


export const PROJECTS = [
  {
    title: "Banking Application",
    image: proj4,
    description:
      "This desktop application, created with JavaFX and Spring Boot, simulated banking operations, allowing me to explore the interplay between frontend designs and backend services.",
    technologies: ["JavaFX", "CSS","JDBC","SQLite"],
  },
  {
    title: "Accet Connect",
    image: proj1,
    description:
      "Built with React, this application taught me the essentials of managing state, creating dynamic components, and designing responsive interfaces.",
    technologies: ["React.js","CSS", "Express.js", "MySQL"],
  },
  {
    title: "Simple Code Editor",
    image: proj2,
    description:
      "A simple yet functional editor that laid the foundation for my understanding of Node.js. This project was a stepping stone to exploring backend functionality.",
    technologies: ["Node.js","CSS","MySQL"],
  },
  {
    title: "Employee Management System",
    image: proj3,
    description:
      "A comprehensive full-stack application leveraging React and Spring Boot. This project solidified my ability to manage complex data flows and backend APIs.",
    technologies: ["React.js", "Bootstrap","SpringBoot","MySQL"],
  },
  {
    title: "Student Assignment Management",
    image: proj5,
    description:
      "Aimed at streamlining assignment tracking and submissions, this project showcases my ability to apply learning to practical, impactful solutions.",
    technologies: ["React.js", "CSS","SpringBoot","MySQL"],
  },
];

export const CONTACT = {
  address: "Nagercoil, Kanya Kumari, Tamil Nadu, India",
  phoneNo: "+91 9003690628",
  email: "abivinuahila@gmail.com",
};
