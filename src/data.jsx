import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
} from "react-icons/fa";
import { FiFileText, FiUser, FiExternalLink } from "react-icons/fi";

import Work from "./assets/project-0.jpg";
import Work1 from "./assets/project-1.jpg";
import Work2 from "./assets/project-2.jpg";
import Work3 from "./assets/project-3.jpg";
import Work4 from "./assets/project-4.jpg";
import Work5 from "./assets/project-5.jpg";
import Work6 from "./assets/project-6.jpg";
import Work7 from "./assets/project-7.jpg";
import Work8 from "./assets/project-8.jpg";
import Work9 from "./assets/project-9.jpg";
import Work10 from "./assets/project-10.jpg";
import Work11 from "./assets/project-11.jpg";
import Work12 from "./assets/project-12.jpg";

import Theme1 from "./assets/purple.png";
import Theme2 from "./assets/red.png";
import Theme3 from "./assets/blueviolet.png";
import Theme4 from "./assets/blue.png";
import Theme5 from "./assets/goldenrod.png";
import Theme6 from "./assets/magenta.png";
import Theme7 from "./assets/yellowgreen.png";
import Theme8 from "./assets/orange.png";
import Theme9 from "./assets/green.png";
import Theme10 from "./assets/yellow.png";

export const links = [
  {
    id: 1,
    name: "About",
    icon: <FaHome className="nav__icon" />,
    path: "/",
  },

  {
    id: 2,
    name: "Resume",
    icon: <FaUser className="nav__icon" />,
    path: "/resume",
  },

  {
    id: 3,
    name: "Portfolio",
    icon: <FaFolderOpen className="nav__icon" />,
    path: "/portfolio",
  },

  {
    id: 4,
    name: "Contact",
    icon: <FaEnvelopeOpen className="nav__icon" />,
    path: "/contact",
  },
];

export const personalInfo = [
  {
    id: 1,
    title: "First Name: ",
    description: "Kristiyan",
  },

  {
    id: 2,
    title: "Last Name: ",
    description: "Tefov",
  },

  {
    id: 3,
    title: "Age: ",
    description: "33 Years",
  },

  {
    id: 4,
    title: "Nationality: ",
    description: "British",
  },

  {
    id: 6,
    title: "Address: ",
    description: "United Kingdom",
  },

  {
    id: 7,
    title: "Phone: ",
    description: "+447306786666",
  },

  {
    id: 8,
    title: "Email: ",
    description: "kristiyan.tefov@icloud.com",
  },

  {
    id: 9,
    title: "Skype: ",
    description: "kristiyan.tefov",
  },

  {
    id: 10,
    title: "Languages: ",
    description: "English, Macedonian, Croatian,",
  },
];

export const stats = [
  {
    id: 1,
    no: "1+",
    title: "Years of <br /> Experience",
  },

  {
    id: 2,
    no: "22+",
    title: "Completed <br /> Projects",
  },

  {
    id: 3,
    no: "1+",
    title: "Happy <br /> Customers",
  },

  {
    id: 4,
    no: "8+",
    title: " Certificates <br /> Achieved",
  },
];

export const resume = [
  {
    id: 1,
    category: "experience",
    icon: <FaBriefcase />,
    year: "2023 - PRESENT",
    title: "Live Buzz <span> Full Stack Web Dev</span>",
    desc: "Developing Web Applications",
    country: "United Kingdom",
  },
  {
    id: 2,
    category: "experience",
    icon: <FaBriefcase />,
    year: "2023 - PRESENT",
    title: "2U <span> Teaching Assistant Full Stack Web Dev</span>",
    desc: "Education Teaching Assistant",
    country: "United Kingdom",
  },

  {
    id: 3,
    category: "experience",
    icon: <FaBriefcase />,
    year: "2020 - 2023",
    title: "Uber <span> Driver </span>",
    desc: "Private Hire",
    country: "United Kingdom",
  },

  {
    id: 4,
    category: "experience",
    icon: <FaBriefcase />,
    year: "2016 - 2020",
    title: "JS Marketing <span> Manager </span>",
    desc: "Clothing Company",
    country: "United Kingdom",
  },

  {
    id: 5,
    category: "experience",
    icon: <FaBriefcase />,
    year: "2011 - 2016",
    title: "HI-Tech Corporation <span> Electro Technician </span>",
    desc: "Multilayer PCB Production",
    country: "North Macedonia",
  },

  {
    id: 6,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2023-2024",
    title: "Certificate <span> Birmingham University </span>",
    desc: "Full Stack Web Developer",
    country: "United Kingdom",
  },

  {
    id: 7,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2022-2023",
    title: "Certificate  <span> Mimo </span>",
    desc: "Web Developer Certificate",
    country: "United Kingdom",
  },

  {
    id: 8,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2005-2009",
    title: "State Diploma <span>State School Cyril and Methodius </span>",
    desc: "Electro Technician for Computer Technics and Automation",
    country: "North Macedonia",
  },
];

export const skills = [
  {
    id: 1,
    title: "Html",
    percentage: "90",
  },

  {
    id: 2,
    title: "Javascript",
    percentage: "81",
  },

  {
    id: 3,
    title: "CSS",
    percentage: "75",
  },

  {
    id: 4,
    title: "React",
    percentage: "70",
  },

  {
    id: 5,
    title: "MongoDB",
    percentage: "70",
  },

  {
    id: 6,
    title: "SQL",
    percentage: "70",
  },

  {
    id: 7,
    title: "GraphQL",
    percentage: "70",
  },

  {
    id: 8,
    title: "Express",
    percentage: "75",
  },
  {
    id: 9,
    title: "PHP",
    percentage: "50",
  },
  {
    id: 10,
    title: "Laravel",
    percentage: "55",
  },
];

export const portfolio = [
  {
    id: 1,
    img: Work,
    title: "Cooklense",
    link: "https://cooklense-6466eecac055.herokuapp.com/",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Website",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "University of Birmingham",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "JS,CSS,HTML,React,MongoDB,JWT,REDUX,ReactBootstrap",
      },
      {
        icon: <FiExternalLink />,
        title: "Link To : ",
        link: "https://github.com/kristefov/Cooklense",
        repo: "Repository",
      },
    ],
  },

  {
    id: 2,
    img: Work1,
    title: "Meal Plan",
    link: "https://abstynent.github.io/project1-meal-plan-app/",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Website",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "University of Birmingham",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "JS,CSS,HTML",
      },
      {
        icon: <FiExternalLink />,
        title: "Link To : ",
        link: "https://github.com/Abstynent/project1-meal-plan-app",
        repo: "Repository",
      },
    ],
  },

  {
    id: 3,
    img: Work2,
    title: "MyLittleWebShop",
    link: "https://mylittlewebshop.herokuapp.com/login",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Website",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "University of Birmingham",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "JS,CSS,HTML",
      },
      {
        icon: <FiExternalLink />,
        title: "Link To : ",
        link: "https://github.com/kristefov/MyLittleWebShop",
        repo: "Repository",
      },
    ],
  },

  {
    id: 4,
    img: Work3,
    title: "WeatherApp",
    link: "https://kristefov.github.io/WeatherApp/",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Website",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "University of Birmingham",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "JS,CSS,HTML",
      },
      {
        icon: <FiExternalLink />,
        title: "Link To : ",
        link: "https://github.com/kristefov/WeatherApp",
        repo: "Repository",
      },
    ],
  },

  {
    id: 5,
    img: Work4,
    title: "Techblogium",
    link: "https://techblogium.herokuapp.com/homepage",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Website",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "University of Birmingham",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "JS,CSS,HTML,SQL",
      },
      {
        icon: <FiExternalLink />,
        title: "Link To : ",
        link: "https://github.com/kristefov/Techblogium",
        repo: "Repository",
      },
    ],
  },
  {
    id: 6,
    img: Work5,
    title: "First Portfolio",
    link: "https://kristefov.github.io/Kris/",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Website",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "University of Birmingham",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "JS,CSS,HTML",
      },
      {
        icon: <FiExternalLink />,
        title: "Link To : ",
        link: "https://github.com/kristefov/Kris",
        repo: "Repository",
      },
    ],
  },

  {
    id: 7,
    img: Work6,
    title: "Horiseon",
    link: "https://kristefov.github.io/Horiseon/",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Website",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "University of Birmingham",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "JS,CSS,HTML",
      },
      {
        icon: <FiExternalLink />,
        title: "Link To : ",
        link: "https://github.com/kristefov/Horiseon",
        repo: "Repository",
      },
    ],
  },
  {
    id: 8,
    img: Work7,
    title: "Note-Taker",
    link: "https://fakenote.herokuapp.com/",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Website",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "University of Birmingham",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "JS,CSS,HTML",
      },
      {
        icon: <FiExternalLink />,
        title: "Link To : ",
        link: "https://github.com/kristefov/Note-Taker",
        repo: "Repository",
      },
    ],
  },
  {
    id: 9,
    img: Work8,
    title: "Password-Generator",
    link: "https://github.com/kristefov/Password-Generator",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Website",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "University of Birmingham",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "JS,CSS,HTML",
      },
      {
        icon: <FiExternalLink />,
        title: "Link To : ",
        link: "https://github.com/kristefov/Password-Generator",
        repo: "Repository",
      },
    ],
  },
  {
    id: 10,
    img: Work9,
    title: "TechQuiz",
    link: "https://kristefov.github.io/TechQuiz/",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Web Application",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "University of Birmingham",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "JS,CSS,HTML",
      },
      {
        icon: <FiExternalLink />,
        title: "Link To : ",
        link: "https://github.com/kristefov/TechQuiz",
        repo: "Repository",
      },
    ],
  },
  {
    id: 11,
    img: Work10,
    title: "WorkSchedule",
    link: "https://kristefov.github.io/WorkSchedule/",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Web Application",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "University of Birmingham",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "JS,CSS,HTML",
      },
      {
        icon: <FiExternalLink />,
        title: "Link To : ",
        link: "https://github.com/kristefov/WorkSchedule",
        repo: "Repository",
      },
    ],
  },
  {
    id: 12,
    img: Work11,
    title: "README-Generator",
    link: "https://github.com/kristefov/README-Generator",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Program",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "University of Birmingham",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "JS",
      },
      {
        icon: <FiExternalLink />,
        title: "Link To : ",
        link: "https://github.com/kristefov/README-Generator",
        repo: "Repository",
      },
    ],
  },
  {
    id: 13,
    img: Work12,
    title: "Employee-Tracker",
    link: "https://github.com/kristefov/Employee-Tracker",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Program",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "University of Birmingham",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "JS,SQL,CMD",
      },
      {
        icon: <FiExternalLink />,
        title: "Link To : ",
        link: "https://github.com/kristefov/Employee-Tracker",
        repo: "Repository",
      },
    ],
  },
];

export const themes = [
  {
    id: 1,
    img: Theme1,
    color: "hsl(252, 35%, 51%)",
  },

  {
    id: 2,
    img: Theme2,
    color: "hsl(4, 93%, 54%)",
  },

  {
    id: 3,
    img: Theme3,
    color: "hsl(271, 76%, 53%)",
  },

  {
    id: 4,
    img: Theme4,
    color: "hsl(225, 73%, 57%)",
  },

  {
    id: 5,
    img: Theme5,
    color: "hsl(43, 74%, 49%)",
  },

  {
    id: 6,
    img: Theme6,
    color: "hsl(339, 81%, 66%)",
  },

  {
    id: 7,
    img: Theme7,
    color: "hsl(80, 61%, 50%)",
  },

  {
    id: 8,
    img: Theme8,
    color: "hsl(19, 96%, 52%)",
  },

  {
    id: 9,
    img: Theme9,
    color: "hsl(88, 65%, 43%)",
  },

  {
    id: 10,
    img: Theme10,
    color: "hsl(42, 100%, 50%)",
  },
];
