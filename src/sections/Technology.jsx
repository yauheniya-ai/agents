import { logoIconsList } from "../constants";
import TitleHeader from "../components/TitleHeader";
import GlowCard from "../components/GlowCard"

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

    <div className="gradient-edge" />
    <div className="marquee h-52">
      <div className="marquee-box md:gap-12 gap-5 mt-16">
        {/* First copy of icons */}
        {logoIconsList.map((icon, index) => (
          <LogoIcon key={`first-${index}`} icon={icon} />
        ))}
        
        {/* Second copy of icons to create the infinite loop effect */}
        {logoIconsList.map((icon, index) => (
          <LogoIcon key={`second-${index}`} icon={icon} />
        ))}
      </div>
    </div>
  </div>
);

export default Technology;