import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import Button from "../components/Button";
import { words } from "../constants";
import HeroExperience from "../components/models/hero_models/HeroExperience";

const Hero = () => {
  const arrowRef = useRef(null);
  const deliverValueRef = useRef(null);
  const resultsTextRef = useRef(null); // New ref for the paragraph

  useGSAP(() => {
    // First animate the header
    const headerTl = gsap.timeline();
    headerTl.fromTo(
      ".hero-text h1",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: "power2.inOut" }
    );

    // Then animate the results text (after header animation completes)
    headerTl.to(resultsTextRef.current, {
      x: 0,
      opacity: 1,
      duration: 0.8,
      ease: "power2.out"
    }, "+=0.3"); // Starts 0.3s after header animation

    // Then add the flip animation for "& DELIVER VALUE"
    headerTl.to(deliverValueRef.current, {
      rotationX: 180,
      duration: 0.8,
      repeat: 1,
      yoyo: true,
      ease: "power2.inOut"
    }, "+=0.5"); // Starts 0.5s after text appears

    // Circle bounce animation (keeps running independently)
    gsap.to(arrowRef.current?.querySelector('.circle-container'), {
      y: 12,
      duration: 0.6,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
      delay: 1.5 // Starts after main animations
    });
  });

  return (
    <section id="hero" className="relative overflow-hidden h-screen">
      {/* Background image */}
      <div className="absolute top-0 left-0 z-10">
        <img 
          src="/images/bg.png" 
          alt=""
          className="opacity-18"
        />
      </div>

      <div className="hero-layout h-full">
        {/* LEFT: Hero Content */}
        <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
          <div className="flex flex-col gap-7">
            <div className="hero-text">
              <h1>
                AI
                <span className="slide">
                  <span className="wrapper">
                    {words.map((word, index) => (
                      <span
                        key={index}
                        className="flex items-center md:gap-3 gap-1 pb-2"
                      >
                        <img
                          src={word.imgPath}
                          alt="icon"
                          className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                        />
                        <span>{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
              <h1>Agent</h1>
            </div>

            {/* Modified paragraph with initial hidden state */}
            <p 
              ref={resultsTextRef}
              className="text-white-50 md:text-xl relative z-10 pointer-events-none"
              style={{ opacity: 0, transform: 'translateX(-50px)' }} // Initial hidden state
            >
              TO DRIVE RESULTS <span ref={deliverValueRef} className="inline-block">& DELIVER VALUE</span>
            </p>
          </div>
        </header>

        {/* RIGHT: 3D Model or Visual */}
        <figure>
          <div className="hero-3d-layout">
            <HeroExperience />
          </div>
        </figure>
      </div>

      {/* Centered animated arrow */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20">
        <Button 
          id="agents"
          ref={arrowRef}
        />
      </div>
    </section>
  );
};

export default Hero;
