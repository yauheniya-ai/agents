const navLinks = [
    {
      name: "Agents",
      link: "#agents",
    },
  ];
  
const words = [
  { text: "Coding", imgPath: "/images/agents/data.svg" },
  { text: "Creative", imgPath: "/images/agents/designs.svg" },
  { text: "Legal", imgPath: "/images/agents/legal.svg" },
  { text: "Research", imgPath: "/images/agents/puzzle.svg" },
  { text: "WebScraping", imgPath: "/images/agents/web.svg" },
  { text: "Voice", imgPath: "/images/agents/voice.svg" },
  { text: "Monitoring", imgPath: "/images/agents/monitoring.svg" },
  { text: "Planning", imgPath: "/images/agents/planning.svg" },
  { text: "Review", imgPath: "/images/agents/review.svg" },
  { text: "Finance", imgPath: "/images/agents/finance.svg" },
  { text: "Mapping", imgPath: "/images/agents/drone.svg" },
  { text: "Security", imgPath: "/images/agents/security.svg" },
];
  
  
const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-01.png",
  },
  {
    imgPath: "/images/logos/company-logo-02.png",
  },
  {
    imgPath: "/images/logos/company-logo-03.png",
  },
  {
    imgPath: "/images/logos/company-logo-04.png",
  },
  {
    imgPath: "/images/logos/company-logo-05.png",
  },
  {
    imgPath: "/images/logos/company-logo-06.png",
  },
  {
    imgPath: "/images/logos/company-logo-07.png",
  },
  {
    imgPath: "/images/logos/company-logo-08.png",
  },
  {
    imgPath: "/images/logos/company-logo-09.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
  {
    imgPath: "/images/logos/company-logo-12.png",
  },
  {
    imgPath: "/images/logos/company-logo-13.png",
  },
  {
    imgPath: "/images/logos/company-logo-14.png",
  },
  {
    imgPath: "/images/logos/company-logo-15.png",
  },
  {
    imgPath: "/images/logos/company-logo-16.png",
  },
  {
    imgPath: "/images/logos/company-logo-17.png",
  },
  {
    imgPath: "/images/logos/company-logo-18.png",
  },
  {
    imgPath: "/images/logos/company-logo-19.png",
  },
  {
    imgPath: "/images/logos/company-logo-20.png",
  },
  {
    imgPath: "/images/logos/company-logo-21.png",
  },
  {
    imgPath: "/images/logos/company-logo-22.png",
  },
];

const firstColumnProjects = [
  {
    id: "research",
    title: "AI Research Agent",
    color: "var(--color-purple-100)",
    description:
      "delves into scholarly databases and institutional repositories to deliver rigorously cited, academically grounded responses to multifaceted inquiries.",
    techStack: "#python, #streamlit, #langchain, #postgresql, #cloudinary",
    image: "/images/Robot_project1.png",
    alt: "AI Research Agent",
  },
  {
    id: "voice",
    title: "AI Voice Agent",
    color: "var(--color-pink-100)",
    description:
      "leverages advanced voice synthesis and natural language processing to deliver real-time, personalized, and context-aware conversations.",
    techStack: "#vapi, #python, #langchain, #postgresql, #streamlit",
    image: "/images/Robot_project4.gif",
    alt: "AI Voice Agent",
    border: true,
  },
];

const secondColumnProjects = [
  {
    id: "legal",
    title: "AI Legal Agent",
    color: "var(--color-gold-100)",
    description:
      "systematically maps statutory frameworks and regulatory provisions, curating precise legal excerpts relevant to specified jurisdictional queries.",
    techStack: "#python, #langchain, #postgresql, #cloudinary, #streamlit",
    image: "/images/Robot_project2.png",
    alt: "AI Legal Agent",
  },
  {
    id: "webScraping",
    title: "AI WebScraping Agent",
    color: "var(--color-blue-100)",
    description:
      "methodically harvests and structures textual and visual content from web sources, presenting organized datasets with clear provenance documentation.",
    techStack: "#python, #streamlit, #selenium, #langchain",
    image: "/images/Robot_project3.png",
    alt: "AI Web Scraping Agent",
  },
  {
    id: "coding",
    title: "AI Coding Agent",
    color: "var(--color-purple-100)",
    description:
      "analyzes, debugs, and extends codebases, implementing fixes and features while maintaining documentation and version control.",
    techStack: "#python, #ollama, #llamaindex, #llamaparse",
    image: "/images/Robot_project5.png",
    alt: "AI Coding Agent",
  },
];



const socialImgs = [
  {
    name: "github",
    url: "https://www.github.com/yauheniya-ai",
    imgPath: "/images/github.svg",
  },
  {
    name: "medium",
    url: "https://medium.com/@yauheniya.ai",
    imgPath: "/images/medium.svg",
  },
  {
    name: "orcid",
    url: "https://orcid.org/0000-0002-7193-1238",
    imgPath: "/images/orcid.svg",
  },
  {
    name: "udemy",
    url: "https://www.udemy.com/",
    imgPath: "/images/udemy.svg",
  },
  {
    name: "linkedin",
    url: "linkedin.com/in/yauheniya-varabyova",
    imgPath: "/images/linkedin.svg",
  },
];
  
export {
  navLinks,
  words,
  logoIconsList,
  firstColumnProjects,
  secondColumnProjects,
  socialImgs
};