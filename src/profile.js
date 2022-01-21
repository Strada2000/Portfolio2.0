// Change website animations
const animation = {
  // make it false to switch off fade-up animation
  animate: true,
  // animation playing duration
  duration: 750,
  // if true, animation plays only once when element comes on screen
  once: false,
};
// Change your display name on tha landing display
const header = {
  name: "Sanket Mense",
};
const background = {
  // Options: Snow or Particle
  type: "Particle",
};
// Write a para about yourself here
// To update your image, go to './styles/images.css'
const section2title = "About Me";
const about = {
  paragraph:
    "Software Engineer who loves to transform ideas into reality using code. With over three years of developing web applications using the latest front-end and UI/UX technologies and full-fledged APIs. Motivated designer and developer with experience creating custom websites with ReactJs, Node, Express, Mongo, and PostgreSQL.",
};
// Edit your skill and the percentage you know about it
// To Add a skill, copy any one below and paste it after the last comma
const skillsBar = [
  {
    name: "HTML5",
    // To add a custom svg instead of font-awesome icons, add svg path below otherwise just comment it out
    svg: "M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z",
    faClass: "fab fa-html5",
  },
  {
    name: "CSS3",
    // svg: '',
    faClass: "fab fa-css3",
  },
  {
    name: "Javascript",
    // svg: '',
    faClass: "fab fa-js",
  },
  {
    name: "React.js",
    // svg: '',
    faClass: "fab fa-react",
  },
  {
    name: "Python",
    // svg: '',
    faClass: "fab fa-python",
  },
  {
    name: "Java",
    // svg: '',
    faClass: "fab fa-java",
  },
  {
    name: "PHP",
    // svg: '',
    faClass: "fab fa-php",
  },
  {
    name: "MySQL",
    // svg: '',
    faClass: "fas fa-database",
  },
];
// Edit your projects, its name, your skills used to make it, and the url.
// You can omit freely anything if you dont have it
// To Add a Project, copy any one below and paste it after the last comma and increment the id's project number
const section3Title = "Past Projects";
const projects = [
  {
    // Add image in './styles/images.css' in #project1
    id: "project1",
    name: "PathFinding Visualizer",
    skills: ["Python, Tkinter"],
    url: "https://github.com/Strada2000/Path-Finding-Visualizer",
  },
  {
    // Add image in './styles/images.css' in #project2
    id: "project2",
    name: "Hire Me",
    skills: ["Python, Tkinter, MySQL"],
    url: "https://github.com/Strada2000/Hire-Me",
  },
  {
    // Add image in './styles/images.css' in #project3
    id: "project3",
    name: "Weather App",
    skills: ["HTML, CSS/Sass, JS, React.js"],
    url: "https://github.com/Strada2000/Weather-App",
  },
];
// Edit your Miscellaneous Activities, its name and the url.
// You can omit freely anything if you dont have it
// To Add a Activity, copy any one below and paste it after the last comma and increment the id's Miscellaneous number

// Contact form text, and Formspree link(to send a submit contact through their API as in contact.js)
// To get your own jotform link, go to https://formspree.io/
// If you hacve the link already, paste it in the contactUrl below
const section5Title = "Get in Touch";
const contact = {
  pitch:
    "Whether you want to get in touch, talk about a project collaboration, or just say hi, I'd love to hear from you. Simply fill the from and send me an email.",

  contactUrl: "https://formspree.io/f/xvolzqvv",
};
// Paste your respective social media links. You can omit any if you dont have it
// Upload your resume in your drive, get the shaareable link and paste it in the resume section
const social = {
  github: "https://github.com/Strada2000",
  //facebook: "https://facebook.com",
  twitter: "https://twitter.com/MenseSanket",
  instagram: "https://www.instagram.com/sanket_mense/",
  linkedin: "https://www.linkedin.com/in/sanketmense/",
  resume:
    "https://drive.google.com/file/d/1PsvJNOMCmhj4xxygqVJBd5AperKLEtt_/view?usp=sharing",
};
// Dont change anything here
export {
  animation,
  header,
  background,
  about,
  skillsBar,
  projects,
  contact,
  social,
  section2title,
  section3Title,
  section5Title,
};
