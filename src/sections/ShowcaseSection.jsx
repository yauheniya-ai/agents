import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import GlowCard from "../components/GlowCard";
import { firstColumnProjects, secondColumnProjects } from "../constants";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const firstColumnRefs = useRef([]);
  const secondColumnRefs = useRef([]);

  // Reset refs array
  firstColumnRefs.current = [];
  secondColumnRefs.current = [];

  // Add to first column refs
  const addToFirstColumnRefs = (el) => {
    if (el && !firstColumnRefs.current.includes(el)) {
      firstColumnRefs.current.push(el);
    }
  };

  // Add to second column refs
  const addToSecondColumnRefs = (el) => {
    if (el && !secondColumnRefs.current.includes(el)) {
      secondColumnRefs.current.push(el);
    }
  };

  useEffect(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animations for first column cards
    firstColumnRefs.current.forEach((cardEl, index) => {
      if (cardEl) {
        gsap.fromTo(
          cardEl,
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
              trigger: cardEl,
              start: "top bottom-=100",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    });

    // Animations for second column cards
    secondColumnRefs.current.forEach((cardEl, index) => {
      if (cardEl) {
        gsap.fromTo(
          cardEl,
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
              trigger: cardEl,
              start: "top bottom-=100",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    });
  }, []); // Empty dependency array ensures this effect runs only once when the component mounts

  // Separate GitHub icon component with custom positioning based on whether the card has a border
  const GitHubIcon = ({ cardData }) => {
    return (
      <a
        href={cardData.githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="github-icon"
        aria-label={`View ${cardData.title} on GitHub`}
      >
        <img
          src="/images/github.svg"
          alt="GitHub icon"
          className="w-5 h-5"
          style={{ 
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)"
          }}
        />
      </a>
    );
  };

  return (
    <div id="agents" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          {/* Render First Column Projects */}
          <div className="first-project-wrapper">
            {firstColumnProjects.map((cardData, index) => (
              <div key={cardData.id} ref={addToFirstColumnRefs}>
                <GlowCard
                  card={{ review: cardData.title }}
                  index={index}
                >
                  <div
                    className="image-wrapper relative"
                    style={
                      cardData.border
                        ? { border: `10px solid ${cardData.color}` }
                        : { backgroundColor: cardData.color }
                    }
                  >
                    <img src={cardData.image} alt={cardData.alt}  />
                    {cardData.githubUrl && <GitHubIcon cardData={cardData} />}
                  </div>
                  <div className="text-content">
                    <h2>
                      <span style={{ color: cardData.color }}>{cardData.title}</span>{" "}
                      {cardData.description}
                    </h2>
                    <p className="text-white-50 md:text-xl mt-4">{cardData.techStack}</p>
                  </div>
                </GlowCard>
              </div>
            ))}
          </div>

          {/* Render Second Column Projects */}
          <div className="project-list-wrapper overflow-hidden">
            {secondColumnProjects.map((cardData, index) => (
              <div key={cardData.id} ref={addToSecondColumnRefs}>
                <GlowCard
                  card={{ review: cardData.title }}
                  index={index + firstColumnProjects.length}
                >
                  <div
                    className="image-wrapper relative"
                    style={{ backgroundColor: cardData.color }}
                  >
                    <img src={cardData.image} alt={cardData.alt} />
                    {cardData.githubUrl && <GitHubIcon cardData={cardData} />}
                  </div>
                  <h2>
                    <span style={{ color: cardData.color }}>{cardData.title}</span>{" "}
                    {cardData.description}
                  </h2>
                  <p className="text-white-50 md:text-xl mt-4">{cardData.techStack}</p>
                </GlowCard>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;