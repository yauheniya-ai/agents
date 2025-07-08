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
  { text: "Email", imgPath: `${import.meta.env.BASE_URL}images/agents/at.svg` },
  { text: "Logistics", imgPath: `${import.meta.env.BASE_URL}images/agents/delivery.svg` },
  { text: "Planning", imgPath: `${import.meta.env.BASE_URL}images/agents/planning.svg` },
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
  { imgPath: `${import.meta.env.BASE_URL}images/logos/logo+company_crewai.png` },
  { imgPath: `${import.meta.env.BASE_URL}images/logos/logo+company_langflow.png` },
  { imgPath: `${import.meta.env.BASE_URL}images/logos/logo+company_vapi.png` },
  { imgPath: `${import.meta.env.BASE_URL}images/logos/logo+company_livekit.png` },
  { imgPath: `${import.meta.env.BASE_URL}images/logos/logo+company_elevenlabs.png` },
  { imgPath: `${import.meta.env.BASE_URL}images/logos/logo+company_selenium.png` },
  { imgPath: `${import.meta.env.BASE_URL}images/logos/logo+company_playwright.png` },
  { imgPath: `${import.meta.env.BASE_URL}images/logos/logo+company_mcp.png` },
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
  { imgPath: `${import.meta.env.BASE_URL}images/logos/logo+company_duckduckgo.png` },
  { imgPath: `${import.meta.env.BASE_URL}images/logos/logo+company_groq.png` },
  { imgPath: `${import.meta.env.BASE_URL}images/logos/logo+company_ollama.png` },
  { imgPath: `${import.meta.env.BASE_URL}images/logos/logo+company_gemini.png` },  
  { imgPath: `${import.meta.env.BASE_URL}images/logos/logo+company_claude.png` },
  { imgPath: `${import.meta.env.BASE_URL}images/logos/logo+company_openai.png` },
  { imgPath: `${import.meta.env.BASE_URL}images/logos/logo+company_deepseek.png` },
  { imgPath: `${import.meta.env.BASE_URL}images/logos/logo+company_arxiv.png` },
  { imgPath: `${import.meta.env.BASE_URL}images/logos/logo+company_semanticscholar.png` },
  { imgPath: `${import.meta.env.BASE_URL}images/logos/logo+company_crossref.png` },
  { imgPath: `${import.meta.env.BASE_URL}images/logos/logo+company_openalex.png` },
  { imgPath: `${import.meta.env.BASE_URL}images/logos/logo+company_wikipedia.png` },
  { imgPath: `${import.meta.env.BASE_URL}images/logos/logo+company_plotly.png` },
  { imgPath: `${import.meta.env.BASE_URL}images/logos/logo+company_matplotlib.png` },
  { imgPath: `${import.meta.env.BASE_URL}images/logos/logo+company_seaborn.png` },
];

const firstColumnProjects = [
  {
    id: "research",
    title: "AI Research Agent",
    color: "var(--color-purple-100)",
    description:
      "leverages the Model Context Protocol (MCP) to systematically query arXiv's scholarly database, extracting and storing bibliographic metadata through structured tool interfaces.",
    techStack: "#python, #mcp, #anthropic, #arxiv",
    image: `${import.meta.env.BASE_URL}images/Robot_P1.png`,
    alt: "AI Research Agent",
    githubUrl: "https://github.com/yauheniya-ai/research-agent-mcp",
  },
  {
    id: "voice",
    title: "AI Voice Agent",
    color: "var(--color-pink-100)",
    description:
      "combines speech recognition, AI language processing, and high-quality text-to-speech for natural voice conversations.",
    techStack: "#python, #livekit, #elevenlabs, #silero, #openai",
    image: `${import.meta.env.BASE_URL}images/Robot_P4.gif`,
    alt: "AI Voice Agent",
    border: true,
    githubUrl: "https://github.com/yauheniya-ai/voice-agent",
  },
  {
    id: "logistics",
    title: "AI Logistics Agent",
    color: "var(--color-blue-100)",
    description:
      "intelligently parses the hospital order form to create a concise summary for the drone operator, incorporating human feedback through voice input using OpenAI's Whisper API for real-time validation of extracted information",
    techStack: "#python, #llamaindex, #llamaparse, #openai, #whisper, #gradio",
    image: `${import.meta.env.BASE_URL}images/Robot_P7.png`,
    alt: "AI Logistics Agent",
    border: true,
    githubUrl: "https://github.com/yauheniya-ai/logistics-agent",
  },
];

const secondColumnProjects = [
  {
    id: "legal",
    title: "AI Legal Agent",
    color: "var(--color-gold-100)",
    description:
      "curates precise legal excerpts relevant to specified jurisdictional queries.",
    techStack: "#python, #langchain, #faiss, #langgraph, #google-gemini",
    image: `${import.meta.env.BASE_URL}images/Robot_P2.png`,
    alt: "AI Legal Agent",
    githubUrl: "https://github.com/yauheniya-ai/legal-agent",
  },
  {
    id: "webScraping",
    title: "AI WebScraping Agent",
    color: "var(--color-blue-100)",
    description:
      "methodically extracts and structures information from websites using browser automation and intelligent content parsing.",
    techStack: "#python, #playwright, #openai, #pydantic",
    image: `${import.meta.env.BASE_URL}images/Robot_P3.png`,
    alt: "AI Web Scraping Agent",
    githubUrl: "https://github.com/yauheniya-ai/webscraping-agent",
  },
  {
    id: "coding",
    title: "AI Coding Agent",
    color: "var(--color-purple-100)",
    description:
      "currently analyzes GitHub issues with natural language queries, designed for future extension to full codebase analysis, debugging, and automated development tasks.",
    techStack: "#python, #langchain, #astradb, #openai, #github",
    image: `${import.meta.env.BASE_URL}images/Robot_P5.png`,
    alt: "AI Coding Agent",
    githubUrl: "https://github.com/yauheniya-ai/github-agent",
  },
  {
    id: "email",
    title: "AI Email Agent",
    color: "var(--color-gold-100)",
    description:
      "triages incoming emails and generates responses for emails requiring replies. Features agent evaluation, human-in-the-loop, and memory. Designed to be connected to the Gmail API.",
    techStack: "#python, #langchain, #langgraph, #langsmith, #openai, #gmail",
    image: `${import.meta.env.BASE_URL}images/Robot_P6.png`,
    alt: "AI Email Agent",
    githubUrl: "https://github.com/yauheniya-ai/email-agent",
  },
  {
    id: "planning",
    title: "AI Planning Agent",
    color: "var(--color-pink-100)",
    description:
      "schedules complex projects, such as building an electric motor production facility, based on user-defined tasks and resources. Features multi-agent integration including Ultimate Project Planner, Expert Estimation Analyst, and Resource Allocation Strategist.",
    techStack: "#python, #crewai, #openai, #plotly",
    image: `${import.meta.env.BASE_URL}images/Robot_P8.png`,
    alt: "AI Planning Agent",
    githubUrl: "https://github.com/yauheniya-ai/planning-agent",
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