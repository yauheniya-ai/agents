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
  { text: "Coding", imgPath: `${import.meta.env.BASE_URL}images/agents/data.svg` },
  { text: "Creative", imgPath: `${import.meta.env.BASE_URL}images/agents/designs.svg` },
  { text: "Legal", imgPath: `${import.meta.env.BASE_URL}images/agents/legal.svg` },
  { text: "Research", imgPath: `${import.meta.env.BASE_URL}images/agents/neuron.svg` },
  { text: "WebScraping", imgPath: `${import.meta.env.BASE_URL}images/agents/web.svg` },
  { text: "Voice", imgPath: `${import.meta.env.BASE_URL}images/agents/voice.svg` },
  { text: "Monitoring", imgPath: `${import.meta.env.BASE_URL}images/agents/monitoring.svg` },
  { text: "Planning", imgPath: `${import.meta.env.BASE_URL}images/agents/planning.svg` },
  { text: "Review", imgPath: `${import.meta.env.BASE_URL}images/agents/review.svg` },
  { text: "Finance", imgPath: `${import.meta.env.BASE_URL}images/agents/finance.svg` },
  { text: "Mapping", imgPath: `${import.meta.env.BASE_URL}images/agents/drone.svg` },
  { text: "Security", imgPath: `${import.meta.env.BASE_URL}images/agents/security.svg` },
];

const logoIconsList = [
  { imgPath: `${import.meta.env.BASE_URL}images/logos/logo+company_github.png` },
  { imgPath: `${import.meta.env.BASE_URL}images/logos/logo+company_python.png` },
  { imgPath: `${import.meta.env.BASE_URL}images/logos/logo+company_tensorflow.png` },
  { imgPath: `${import.meta.env.BASE_URL}images/logos/logo+company_keras.png` },
  { imgPath: `${import.meta.env.BASE_URL}images/logos/logo+company_scikitlearn.png` },
  { imgPath: `${import.meta.env.BASE_URL}images/logos/logo+company_langchain.png` },
  { imgPath: `${import.meta.env.BASE_URL}images/logos/logo+company_langgraph.png` },
  { imgPath: `${import.meta.env.BASE_URL}images/logos/logo+company_langsmith.png` },
  { imgPath: `${import.meta.env.BASE_URL}images/logos/logo+company_llamaindex.png` },
  { imgPath: `${import.meta.env.BASE_URL}images/logos/logo+company_langflow.png` },
  { imgPath: `${import.meta.env.BASE_URL}images/logos/logo+company_vapi.png` },
  { imgPath: `${import.meta.env.BASE_URL}images/logos/logo+company_selenium.png` },
  { imgPath: `${import.meta.env.BASE_URL}images/logos/logo+company_plotly.png` },
  { imgPath: `${import.meta.env.BASE_URL}images/logos/logo+company_matplotlib.png` },
  { imgPath: `${import.meta.env.BASE_URL}images/logos/logo+company_seaborn.png` },
  { imgPath: `${import.meta.env.BASE_URL}images/logos/logo+company_django.png` },
  { imgPath: `${import.meta.env.BASE_URL}images/logos/logo+company_fastapi.png` },
  { imgPath: `${import.meta.env.BASE_URL}images/logos/logo+company_flask.png` },
  { imgPath: `${import.meta.env.BASE_URL}images/logos/logo+company_react.png` },
  { imgPath: `${import.meta.env.BASE_URL}images/logos/logo+company_threejs.png` },
  { imgPath: `${import.meta.env.BASE_URL}images/logos/logo+company_chroma.png` },
  { imgPath: `${import.meta.env.BASE_URL}images/logos/logo+company_astradb.png` },
  { imgPath: `${import.meta.env.BASE_URL}images/logos/logo+company_postgresql.png` },
  { imgPath: `${import.meta.env.BASE_URL}images/logos/logo+company_neon.png` },
  { imgPath: `${import.meta.env.BASE_URL}images/logos/logo+company_cloudinary.png` },
  { imgPath: `${import.meta.env.BASE_URL}images/logos/logo+company_streamlit.png` },
  { imgPath: `${import.meta.env.BASE_URL}images/logos/logo+company_vercel.png` },
  { imgPath: `${import.meta.env.BASE_URL}images/logos/logo+company_render.png` },
  { imgPath: `${import.meta.env.BASE_URL}images/logos/logo+company_huggingface.png` },
  { imgPath: `${import.meta.env.BASE_URL}images/logos/logo+company_docker.png` },
  { imgPath: `${import.meta.env.BASE_URL}images/logos/logo+company_tavily.png` },
  { imgPath: `${import.meta.env.BASE_URL}images/logos/logo+company_groq.png` },
  { imgPath: `${import.meta.env.BASE_URL}images/logos/logo+company_ollama.png` },
  { imgPath: `${import.meta.env.BASE_URL}images/logos/logo+company_vertexai.png` },
  { imgPath: `${import.meta.env.BASE_URL}images/logos/logo+company_gemini.png` },  
  { imgPath: `${import.meta.env.BASE_URL}images/logos/logo+company_claude.png` },
  { imgPath: `${import.meta.env.BASE_URL}images/logos/logo+company_openai.png` },
  { imgPath: `${import.meta.env.BASE_URL}images/logos/logo+company_deepseek.png` },
  { imgPath: `${import.meta.env.BASE_URL}images/logos/logo+company_arxiv.png` },
  { imgPath: `${import.meta.env.BASE_URL}images/logos/logo+company_semanticscholar.png` },
  { imgPath: `${import.meta.env.BASE_URL}images/logos/logo+company_crossref.png` },
  { imgPath: `${import.meta.env.BASE_URL}images/logos/logo+company_openalex.png` },
];

const firstColumnProjects = [
  {
    id: "research",
    title: "AI Research Agent",
    color: "var(--color-purple-100)",
    description:
      "delves into scholarly databases and institutional repositories to deliver rigorously cited, academically grounded responses to multifaceted inquiries.",
    techStack: "#python, #langchain, #langgraph, #google-gemini, #chromadb, #semanticscholar, #arxiv, #crossref, #openalex, #streamlit",
    image: `${import.meta.env.BASE_URL}images/Robot_project1.png`,
    alt: "AI Research Agent",
    githubUrl: "https://github.com/yauheniya-ai/research-agent",
  },
  {
    id: "voice",
    title: "AI Voice Agent",
    color: "var(--color-pink-100)",
    description:
      "leverages advanced voice synthesis and natural language processing to deliver real-time, personalized, and context-aware conversations.",
    techStack: "#vapi, #python, #langchain, #langgraph, #postgresql, #streamlit",
    image: `${import.meta.env.BASE_URL}images/Robot_project4.gif`,
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
    techStack: "#python, #langchain, #langgraph, #chromadb, #google-gemini, #tavily",
    image: `${import.meta.env.BASE_URL}images/Robot_project2.png`,
    alt: "AI Legal Agent",
    githubUrl: "https://github.com/yauheniya-ai/legal-agent",
  },
  {
    id: "webScraping",
    title: "AI WebScraping Agent",
    color: "var(--color-blue-100)",
    description:
      "methodically harvests and structures textual and visual content from web sources, presenting organized datasets with clear provenance documentation.",
    techStack: "#python, #streamlit, #langchain, #crawl4ai",
    image: `${import.meta.env.BASE_URL}images/Robot_project3.png`,
    alt: "AI Web Scraping Agent",
    githubUrl: "https://github.com/yauheniya-ai/webscraping-agent",
  },
  {
    id: "coding",
    title: "AI Coding Agent",
    color: "var(--color-purple-100)",
    description:
      "analyzes, debugs, and extends codebases, implementing fixes and features while maintaining documentation and version control.",
    techStack: "#python, #langchain, #langgraph, #chromadb, #google-gemini",
    image: `${import.meta.env.BASE_URL}images/Robot_project5.png`,
    alt: "AI Coding Agent",
    githubUrl: "https://github.com/yauheniya-ai/coding-agent",
  },
];

const socialImgs = [
  {
    name: "github",
    url: "https://www.github.com/yauheniya-ai",
    imgPath: `${import.meta.env.BASE_URL}images/github.svg`,
  },
  {
    name: "medium",
    url: "https://medium.com/@yauheniya.ai",
    imgPath: `${import.meta.env.BASE_URL}images/medium.svg`,
  },
  {
    name: "orcid",
    url: "https://orcid.org/0000-0002-7193-1238",
    imgPath: `${import.meta.env.BASE_URL}images/orcid.svg`,
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