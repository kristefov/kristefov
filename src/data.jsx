import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
  
  
} from 'react-icons/fa';
import { FiFileText, FiUser, FiExternalLink } from 'react-icons/fi';

import Work1 from './assets/project-1.jpg';
import Work2 from './assets/project-2.jpg';
import Work3 from './assets/project-3.jpg';
import Work4 from './assets/project-4.jpg';
import Work5 from './assets/project-5.jpg';
import Work6 from './assets/project-6.jpg';
import Work7 from './assets/project-7.jpg';
import Work8 from './assets/project-8.jpg';
import Work9 from './assets/project-9.jpg';
import Work10 from './assets/project-10.jpg';
import Work11 from './assets/project-11.jpg';
import Work12 from './assets/project-12.jpg';

import Theme1 from './assets/purple.png';
import Theme2 from './assets/red.png';
import Theme3 from './assets/blueviolet.png';
import Theme4 from './assets/blue.png';
import Theme5 from './assets/goldenrod.png';
import Theme6 from './assets/magenta.png';
import Theme7 from './assets/yellowgreen.png';
import Theme8 from './assets/orange.png';
import Theme9 from './assets/green.png';
import Theme10 from './assets/yellow.png';

export const links = [
  {
    id: 1,
    name: 'Home',
    icon: <FaHome className='nav__icon' />,
    path: '/',
  },

  {
    id: 2,
    name: 'About',
    icon: <FaUser className='nav__icon' />,
    path: '/about',
  },

  {
    id: 3,
    name: 'Portfolio',
    icon: <FaFolderOpen className='nav__icon' />,
    path: '/portfolio',
  },

  {
    id: 4,
    name: 'Contact',
    icon: <FaEnvelopeOpen className='nav__icon' />,
    path: '/contact',
  },
];

export const personalInfo = [
  {
    id: 1,
    title: 'First Name : ',
    description: 'Kristiyan',
  },

  {
    id: 2,
    title: 'Last Name : ',
    description: 'Tefov',
  },

  {
    id: 3,
    title: 'Age : ',
    description: '33 Years',
  },

  {
    id: 4,
    title: 'Nationality : ',
    description: 'United Kingdom',
  },

  {
    id: 5,
    title: 'Freelance : ',
    description: 'Available',
  },

  {
    id: 6,
    title: 'Address : ',
    description: 'United Kingdom',
  },

  {
    id: 7,
    title: 'Phone : ',
    description: '+447306786666',
  },

  {
    id: 8,
    title: 'Email : ',
    description: 'kristiyan.tefov@icloud.com',
  },

  {
    id: 9,
    title: 'Skype : ',
    description: 'Kristiyan Tefov',
  },

  {
    id: 10,
    title: 'Languages : ',
    description: 'English, Macedonian, Serbian, Croatian,',
  },
];

export const stats = [
  {
    id: 1,
    no: '0+',
    title: 'Years of <br /> Experience',
  },

  {
    id: 2,
    no: '20+',
    title: 'Completed <br /> Projects',
  },

  {
    id: 3,
    no: '0+',
    title: 'Happy <br /> Customers',
  },

  {
    id: 4,
    no: '4+',
    title: ' Awards <br /> Won',
  },
];

export const resume = [
  {
    id: 1,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '2023 - PRESENT',
    title: 'Web Developer <span> Carrier Change </span>',
    desc: 'Open for Work',
  },

  {
    id: 2,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '2016 - 2020',
    title: 'Manager <span> JS Marketing</span>',
    desc: 'Operations Management · Coaching · Management · Project Management · Team Management'},

  {
    id: 3,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '2011 - 2016',
    title: 'Electro Technician <span> HI-Tech Corporation</span>',
    desc: 'Multilayer PCB Production - Expertise in CNC Maintenance and Repair'
  },

  {
    id: 4,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2023',
    title: 'Certificate <span> Birmingham University </span>',
    desc: 'Full Stack Web Developer',
  },

  {
    id: 5,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2023',
    title: 'Certificate  <span> Mimo </span>',
    desc: 'Web Developer Certificate',
  },

  {
    id: 6,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2009',
    title: 'Bachelor Degree <span>State School SS. Cyril and Methodius </span>',
    desc: 'RQF Level 3 /SCQF Level 6-7 / CQFW Level 3 / GCSE / BTEC Level3, Electro Technician for Computer Technics and Automation',
  },
];

export const skills = [
  {
    id: 1,
    title: 'Html',
    percentage: '100',
  },

  {
    id: 2,
    title: 'Javascript',
    percentage: '79',
  },

  {
    id: 3,
    title: 'CSS',
    percentage: '60',
  },

  {
    id: 4,
    title: 'React',
    percentage: '76',
  },

  {
    id: 5,
    title: 'MongoDB',
    percentage: '70',
  },

  {
    id: 6,
    title: 'SQL',
    percentage: '70',
  },

  {
    id: 7,
    title: 'GraphQL',
    percentage: '70',
  },

  {
    id: 8,
    title: 'Express',
    percentage: '75',
  },
];

export const portfolio = [
  {
    id: 1,
    img: Work1,
    title: 'Meal Plan',
    link: 'https://abstynent.github.io/project1-meal-plan-app/',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Website',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'University of Birmingham',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'JS,CSS,HTML',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        link: 'https://github.com/Abstynent/project1-meal-plan-app',
        repo: 'Repository'
      },
    ],
  },

  {
    id: 2,
    img: Work2,
    title: 'MyLittleWebShop',
    link: 'https://mylittlewebshop.herokuapp.com/login',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Website',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'University of Birmingham',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'JS,CSS,HTML',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        link: 'https://github.com/kristiyantefov/MyLittleWebShop',
        repo: 'Repository'
      },
    ],
  },

  {
    id: 3,
    img: Work3,
    title: 'WeatherApp',
    link: 'https://kristiyantefov.github.io/WeatherApp/',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Website',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'University of Birmingham',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'JS,CSS,HTML',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        link: 'https://github.com/kristiyantefov/WeatherApp',
        repo: 'Repository'
      },
    ],
  },

  {
    id: 4,
    img: Work4,
    title: 'Techblogium',
    link: 'https://techblogium.herokuapp.com/homepage',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Website',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'University of Birmingham',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'JS,CSS,HTML,SQL',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        link: 'https://github.com/kristiyantefov/Techblogium',
        repo: 'Repository'
      },
    ],
  },
  {
    id: 5,
    img: Work5,
    title: 'First Portfolio',
    link: 'https://kristiyantefov.github.io/Kris/',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Website',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'University of Birmingham',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'JS,CSS,HTML',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        link: 'https://github.com/kristiyantefov/Kris',
        repo: 'Repository'
      },
    ],
  },

  {
    id: 6,
    img: Work6,
    title: 'Horiseon',
    link: 'https://kristiyantefov.github.io/Horiseon/',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Website',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'University of Birmingham',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'JS,CSS,HTML',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        link: 'https://github.com/kristiyantefov/Horiseon',
        repo: 'Repository'
      },
    ],
  },
  {
    id: 7,
    img: Work7,
    title: 'Note-Taker',
    link: 'https://fakenote.herokuapp.com/',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Website',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'University of Birmingham',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'JS,CSS,HTML',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        link: 'https://github.com/kristiyantefov/Note-Taker',
        repo: 'Repository'
      },
    ],
  },
  {
    id: 8,
    img: Work8,
    title: 'Password-Generator',
    link: 'https://github.com/kristiyantefov/Password-Generator',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Website',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'University of Birmingham',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'JS,CSS,HTML',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        link: 'https://github.com/kristiyantefov/Password-Generator',
        repo: 'Repository'
      },
    ],
  },
  {
    id: 9,
    img: Work9,
    title: 'TechQuiz',
    link: 'https://kristiyantefov.github.io/TechQuiz/',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Web Application',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'University of Birmingham',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'JS,CSS,HTML',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        link: 'https://github.com/kristiyantefov/TechQuiz',
        repo: 'Repository'
      },
    ],
  },
  {
    id: 10,
    img: Work10,
    title: 'WorkSchedule',
    link: 'https://kristiyantefov.github.io/WorkSchedule/',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Web Application',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'University of Birmingham',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'JS,CSS,HTML',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        link: 'https://github.com/kristiyantefov/WorkSchedule',
        repo: 'Repository'
      },
    ],
  },
  {
    id: 11,
    img: Work11,
    title: 'README-Generator',
    link: 'https://github.com/kristiyantefov/README-Generator',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Program',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'University of Birmingham',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'JS',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        link: 'https://github.com/kristiyantefov/README-Generator',
        repo: 'Repository'
      },
    ],
  },
  {
    id: 12,
    img: Work12,
    title: 'Employee-Tracker',
    link: 'https://github.com/kristiyantefov/Employee-Tracker',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Program',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'University of Birmingham',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'JS,SQL,CMD',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        link: 'https://github.com/kristiyantefov/Employee-Tracker',
        repo: 'Repository'
      },
    ],
  },
];

export const themes = [
  {
    id: 1,
    img: Theme1,
    color: 'hsl(252, 35%, 51%)',
  },

  {
    id: 2,
    img: Theme2,
    color: 'hsl(4, 93%, 54%)',
  },

  {
    id: 3,
    img: Theme3,
    color: 'hsl(271, 76%, 53%)',
  },

  {
    id: 4,
    img: Theme4,
    color: 'hsl(225, 73%, 57%)',
  },

  {
    id: 5,
    img: Theme5,
    color: 'hsl(43, 74%, 49%)',
  },

  {
    id: 6,
    img: Theme6,
    color: 'hsl(339, 81%, 66%)',
  },

  {
    id: 7,
    img: Theme7,
    color: 'hsl(80, 61%, 50%)',
  },

  {
    id: 8,
    img: Theme8,
    color: 'hsl(19, 96%, 52%)',
  },

  {
    id: 9,
    img: Theme9,
    color: 'hsl(88, 65%, 43%)',
  },

  {
    id: 10,
    img: Theme10,
    color: 'hsl(42, 100%, 50%)',
  },
];
