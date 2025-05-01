const navLinks = [
  {
    name: "Agents",
    link: "#agents",
  },
  {
    name: "Technology",
    link: "#technology",
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
  { imgPath: "/images/logos/logo+company_github.png" },
  { imgPath: "/images/logos/logo+company_python.png" },
  { imgPath: "/images/logos/logo+company_tensorflow.png" },
  { imgPath: "/images/logos/logo+company_keras.png" },
  { imgPath: "/images/logos/logo+company_scikitlearn.png" },
  { imgPath: "/images/logos/logo+company_langchain.png" },
  { imgPath: "/images/logos/logo+company_langgraph.png" },
  { imgPath: "/images/logos/logo+company_langsmith.png" },
  { imgPath: "/images/logos/logo+company_llamaindex.png" },
  { imgPath: "/images/logos/logo+company_langflow.png" },
  { imgPath: "/images/logos/logo+company_vapi.png" },
  { imgPath: "/images/logos/logo+company_selenium.png" },
  { imgPath: "/images/logos/logo+company_plotly.png" },
  { imgPath: "/images/logos/logo+company_matplotlib.png" },
  { imgPath: "/images/logos/logo+company_seaborn.png" },
  { imgPath: "/images/logos/logo+company_django.png" },
  { imgPath: "/images/logos/logo+company_fastapi.png" },
  { imgPath: "/images/logos/logo+company_flask.png" },
  { imgPath: "/images/logos/logo+company_react.png" },
  { imgPath: "/images/logos/logo+company_threejs.png" },
  { imgPath: "/images/logos/logo+company_astradb.png" },
  { imgPath: "/images/logos/logo+company_postgresql.png" },
  { imgPath: "/images/logos/logo+company_neon.png" },
  { imgPath: "/images/logos/logo+company_cloudinary.png" },
  { imgPath: "/images/logos/logo+company_streamlit.png" },
  { imgPath: "/images/logos/logo+company_vercel.png" },
  { imgPath: "/images/logos/logo+company_render.png" },
  { imgPath: "/images/logos/logo+company_docker.png" },
  { imgPath: "/images/logos/logo+company_travily.png" },
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
    githubUrl: "https://github.com/yauheniya-ai/research-agent",
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
    githubUrl: "https://github.com/yauheniya-ai/voice-agent",
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
    githubUrl: "https://github.com/yauheniya-ai/legal-agent",
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
    githubUrl: "https://github.com/yauheniya-ai/webscraping-agent",
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
    githubUrl: "https://github.com/yauheniya-ai/coding-agent",
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
];

export {
  navLinks,
  words,
  logoIconsList,
  firstColumnProjects,
  secondColumnProjects,
  socialImgs,
};