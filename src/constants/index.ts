import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

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
  nodejs,
  git,
  Nexcent,
  Logoipsum,
  Invoice,
  DashboardApp,
  Dems
} from "../assets";

export const navLinks: TNavLink[] = [
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

const services: TService[] = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "System Develoer",
    icon: mobile,
  },
  {
    title: "System Administration",
    icon: backend,
  },
  {
    title: "IT Specialist",
    icon: creator,
  },
];

const technologies: TTechnology[] = [
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
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences: TExperience[] = [
  {
    title: "Chief Technological Officer",
    companyName: "SysGo",
    icon: backend,
    iconBg: "#E6DEDD",
    date: "Aug 2023 - Present",
    points: [
      "Developing and maintain web applications using related technologies.",
      "Collaborate with the team members to establish objectives and design more functional, cohesive codes to enhance the user experience.",
      "Developing ideas for new programs, products, or features by monitoring industry developments and trends.",
      "Recording data and reporting it to proper parties, such as clients or leadership.",
      "Participating in continuing education and training to remain current on best practices, learn new programming languages, and better assist other team members.",
      "Get feedback from, and build solutions for, users and customers",
      "Create quality mockups and prototypes",
      "Stay up-to-date on emerging technologies",
      "Write functional requirement documents and guides",
    ],
  },
  {
    title: "IT SPECIALIST",
    companyName: "Healthier Fit Co. LTD.",
    icon: backend,
    iconBg: "#E6DEDD",
    date: "Jan 2022 - March 2023",
    points: [
      "Provided direction and motivation for IT Department team members to meet organizational needs. Provided support and services related to software, hardware, networks, systems, and servers, keeping up with the",
      "Provide support and services related to software, hardware, networks, systems, servers, keeping up with the latest technology and provided solutions to problems the organization faced.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Educating coworkers about network security and best practices for computer usage.",
      "Supporting day-to-day operations of the who IT Infrastructure",
      "Install and Configure Networks",
      "Provide User Support",
      "Provide User Training",
      "Troubleshoot Systems, Hardware and User Workstations",
      "Installing new software and hardware components.",
      "Regularly evaluating IT systems to ensure they meet the necessary demands."
    ],
  },
  {
    title: "Freelance Web Developer",
    companyName: "",
    icon: backend,
    iconBg: "#383E56",
    date: "2020 - Present",
    points: [
      "Developing and maintain web applications using related technologies.",
      "Collaborate with the team members to establish objectives and design more functional, cohesive codes to enhance the user experience.",
      "Developing ideas for new programs, products, or features by monitoring industry developments and trends.",
      "Recording data and reporting it to proper parties, such as clients or leadership.",
      "Participating in continuing education and training to remain current on best practices, learn new programming languages, and better assist other team members.",
      "Get feedback from, and build solutions for, users and customers",
    ],
  },
];

const testimonials: TTestimonial[] = [
];

const projects: TProject[] = [
  {
    name: "SysGo-Dems",
    description:
      "Designing, Development, and Implementation of an Efficient and User-Friendly Dental Management System",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "js",
        color: "pink-text-gradient",
      },
      {
        name: "jquery",
        color: "orange-text-gradient",
      },
      {
        name: "php",
        color: "blue-text-gradient",
      },
      {
        name: "bs5",
        color: "pink-text-gradient",
      },
    ],
    image: Dems,
    sourceCodeLink: "https://github.com/SYSGO-SOLUTIONS/DEMS",
  },
  {
    name: "Nexcent",
    description:
      "Nexcent is a figma design created by Muntasir Billah, in which I developed into a Website.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "js",
        color: "pink-text-gradient",
      },
      {
        name: "bs5",
        color: "orange-text-gradient",
      },
    ],
    image: Nexcent,
    sourceCodeLink: "https://zhackdtech.github.io/nexcent/",
  },
  {
    name: "Logo Ipsum",
    description:
      "Outcome-centered products that reduce churn, optimize pricing, and grow your subscription business end-to-end.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "js",
        color: "pink-text-gradient",
      },
      {
        name: "bs5",
        color: "orange-text-gradient",
      },
    ],
    image: Logoipsum,
    sourceCodeLink: "https://zhackdtech.github.io/logo-ipsum/",
  },
  {
    name: "Invoice App",
    description:
      "Invoice App Dashboard is a sample user interface that would introduce beginners to make advance charts, dashboards and User Interface for the same application types.",
    tags: [
      {
        name: "Csharp(C#)",
        color: "blue-text-gradient",
      },
    ],
    image: Invoice,
    sourceCodeLink: "https://github.com/zhackdtech/Invoice-App",
  },
  
  {
    name: "Dashboard App",
    description:
      "Invoice App Dashboard is a sample user interface that would introduce beginners to make advance charts, dashboards and User Interface for the same application types.",
    tags: [
      {
        name: "Csharp(C#)",
        color: "blue-text-gradient",
      },
    ],
    image: DashboardApp,
    sourceCodeLink: "https://github.com/zhackdtech/DASHBOARD-UI",
  },
];

export { services, technologies, experiences, testimonials, projects };
