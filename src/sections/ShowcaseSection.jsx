import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import GlowCard from "../components/GlowCard";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const researchRef = useRef(null);
  const legalRef = useRef(null);
  const webScrapingRef = useRef(null);
  const voiceRef = useRef(null);
  const codingRef = useRef(null);

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animations for each app showcase
    const cards = [researchRef.current, legalRef.current, webScrapingRef.current];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  return (
    <div id="agents" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          <div ref={researchRef} className="first-project-wrapper">
            <GlowCard card={{ review: 'AI Research Agent' }} index={0}>
              <div className="image-wrapper">
                <img 
                  src="/images/Robot_project1.png" 
                  alt="AI Research Agent" 
                />
              </div>
              <div className="text-content">
                <h2>
                  <span style={{ color: 'var(--color-purple-100)' }}>AI Research Agent</span> delves into scholarly databases and institutional repositories to deliver rigorously cited, academically grounded responses to multifaceted inquiries. 
                </h2>
                <p className="text-white-50 md:text-xl">
                  #python, #streamlit, #langchain, #postgresql, #cloudinary
                </p>
              </div>
            </GlowCard>

            <GlowCard card={{ review: 'AI Voice Agent' }} index={3} ref={voiceRef}>
            <div className="image-wrapper" style={{ border: `10px solid var(--color-pink-100)` }}>
                <img 
                  src="/images/Robot_project4.gif" 
                  alt="AI Voice Agent" 
                />
              </div>
              <div className="text-content">
                <h2>
                  <span style={{ color: 'var(--color-pink-100)' }}>AI Voice Agent</span> leverages advanced voice synthesis and natural language processing to deliver real-time, personalized, and context-aware conversations. 
                </h2>
                <p className="text-white-50 md:text-xl">
                #vapi, #python, #langchain, #postgresql, #streamlit 
                </p>
              </div>
            </GlowCard>
          </div>

          <div className="project-list-wrapper overflow-hidden">
            <GlowCard card={{ review: 'AI Legal Agent' }} index={1} ref={legalRef}>
              <div className="image-wrapper bg-[color:var(--color-gold-100)]">
                <img
                  src="/images/Robot_project2.png"
                  alt="AI Legal Agent"
                />
              </div>
              <h2>
                <span style={{ color: 'var(--color-gold-100)' }}>AI Legal Agent</span> systematically maps statutory frameworks and regulatory provisions, curating precise legal excerpts relevant to specified jurisdictional queries.
              </h2>
              <p className="text-white-50 md:text-xl mt-4">
                  #python, #langchain, #postgresql, #cloudinary, #streamlit
              </p>
            </GlowCard>

            <GlowCard card={{ review: 'AI WebScraping Agent' }} index={2} ref={webScrapingRef}>
              <div className="image-wrapper bg-[color:var(--color-blue-10)]">
                <img 
                  src="/images/Robot_project3.png" 
                  alt="AI Web Scraping Agent"                     
                />
              </div>
              <h2>
                <span style={{ color: 'var(--color-blue-10)' }}>AI WebScraping Agent</span> methodically harvests and structures textual and visual content from web sources, presenting organized datasets with clear provenance documentation.
              </h2>
              <p className="text-white-50 md:text-xl mt-4">
                  #python, #streamlit, #selenium, #langchain
              </p>
            </GlowCard>

            <GlowCard card={{ review: 'AI Coding Agent' }} index={2} ref={codingRef}>
              <div className="image-wrapper bg-[color:var(--color-purple-100)]">
                <img 
                  src="/images/Robot_project5.png" 
                  alt="AI Coding Agent"                     
                />
              </div>
              <h2>
                <span style={{ color: 'var(--color-purple-100)' }}>AI Coding Agent</span> analyzes, debugs, and extends codebases, implementing fixes and features while maintaining documentation and version control.
              </h2>
              <p className="text-white-50 md:text-xl mt-4">
                  #python, #ollama, #llamaindex, #llamaparse
              </p>
            </GlowCard>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;
