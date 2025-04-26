import { logoIconsList } from "../constants";
import TitleHeader from "../components/TitleHeader";
import GlowCard from "../components/GlowCard";
import HoverGrid from "../components/HoverGrid";

const LogoIcon = ({ icon, index }) => {
  return (
    <GlowCard card={{}} index={index}>
      <div className="flex-none flex-center marquee-item">
        <img src={icon.imgPath} alt={icon.name} />
      </div>
    </GlowCard>
  );
};

const Technology = () => (
  <section id="technology" className="flex-center section-padding">
    <div className="md:my-20 my-10 relative">
      <TitleHeader
        sub={
          <span className="flex items-center gap-2">
            <img 
              src="/public/images/engineering.svg" 
              width="24" 
              height="24" 
              alt="Robot arm"
              className="text-white transform scale-x-[-1]"
              style={{ transform: 'scaleX(+1)' }}
            />
            Tech Stack
          </span>
        }
        title="Technologies to Build and Deploy AI Agents"
      />

      {/* Grid replacing the 3D model */}
      <div className="w-full flex justify-center items-center my-16">
        <div className="relative w-full max-w-full px-4">
          <HoverGrid />
        </div>
      </div>

      {/* Marquee + Gradient Edge */}
      <div className="relative">
        {/* Gradient Left */}
        <div className="gradient-edge" />

        {/* Marquee */}
        <div className="marquee h-52">
          <div className="marquee-box md:gap-12 gap-5">
            {logoIconsList.map((icon, index) => (
              <LogoIcon key={`first-${index}`} icon={icon} />
            ))}
            {logoIconsList.map((icon, index) => (
              <LogoIcon key={`second-${index}`} icon={icon} />
            ))}
          </div>
        </div>

        {/* Gradient Right */}
        <div className="gradient-edge" />
      </div>
    </div>
  </section>
);

export default Technology;
