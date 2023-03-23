import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  python,
  bootstrap,
  mysql,
  oracle,
  firebase,
  android,
  streamlit,
  stockProject,
  cryptoProject,
  aiHub,
  aiHub1,
  workconnectProject,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Python Developer",
    icon: python,
  },
  {
    title: "Working on CMS",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "bootstrap",
    icon: bootstrap,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  
  {
    name: "python",
    icon: python,
  },
  {
    name: "mysql",
    icon: mysql,
  },
  {
    name: "oracle",
    icon: oracle,
  },
  {
    name: "firebase",
    icon: firebase,
  },
  {
    name: "android",
    icon: android,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: streamlit,
  },
  
];

const experiences = [
  {
    title: "Pimpri Chinchwad College Of Engineering",
    company_name: "B.Tech in Computer Engineering",
    icon: starbucks,
    iconBg: "#383E56",
    date: "September 2022 - Current",
    points: [
      "Pursuing B.Tech in 2nd Year ",
      "Overall CGPA : 9.04",
      
    ],
  },
  {
    title: "Government Polytechnic Pune",
    company_name: "Diploma in Computer Engineering",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "August 2019 - August 2021",
    points: [
      "Aggregate : 93.67%",
    ],
  },
  {
    title: "Jawaharlal Vidyalaya Kedgaon",
    company_name: "5th - SSC",
    icon: shopify,  
    iconBg: "#383E56",
    date: "June 2014  - March 2019",
    points: [
      "SSC - 93.60%",
      
    ],
  },
 
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "AI Hub",
    description:
      " AI Tools Repository is a comprehensive collection of the best and most popular AI tools available on the web, organized by category and updated regularly.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "react",
        color: "pink-text-gradient",
      },
    ],
    image: aiHub,
    source_code_link: "https://github.com/Ritishshelke007/AI-Hub",
  },

  {
    name: "WorkConnect",
    description:
      "Full-stack Java application that allows job seekers to apply for different jobs, recruiters to post real-time jobs. It's mainly developed for hiring most suitable candidate for job.",
    tags: [
      {
        name: "java",
        color: "blue-text-gradient",
      },
      {
        name: "jsp",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: workconnectProject,
    source_code_link: "https://github.com/Ritishshelke007/WorkConnect",
  },
  {
    name: "ByTheDip",
    description:
      "Web application developed in Python uses machine learning for Stock Price Prediction based on previous data trained model with a beautiful UI developed in Streamlit.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "streamlit",
        color: "green-text-gradient",
      },
      {
        name: "scikit-learn",
        color: "pink-text-gradient",
      },
    ],
    image: stockProject,
    source_code_link: "https://github.com/Ritishshelke007/Stock-Market-Price-Prediction",
  },
  {
    name: "Crypto App",
    description:
      "Python web application developed in Streamlit includes feedparser, pandas, yfinance, gives the real-time price updates of various crypto coins with prediction",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "streamlit",
        color: "green-text-gradient",
      },
      {
        name: "pandas",
        color: "pink-text-gradient",
      },
    ],
    image: cryptoProject,
    source_code_link: "https://github.com/Ritishshelke007/crypto_app",
  },


];

export { services, technologies, experiences, testimonials, projects };
