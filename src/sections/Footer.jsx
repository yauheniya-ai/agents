import { Link } from "react-router-dom";
import { socialImgs } from "../constants";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container flex flex-col gap-3 sm:flex-row sm:justify-between sm:items-center">
        
        {/* Social Icons - appear first on mobile */}
        <div className="order-1 sm:order-none socials flex justify-center gap-4">
          {socialImgs.map((socialImg, index) => (
            <a
              key={index}
              href={socialImg.url}
              target="_blank"
              rel="noopener noreferrer"
              className="icon w-10 h-10 rounded-full bg-white-50 flex items-center justify-center transition-colors duration-300 hover:bg-white"
            >
              <img
                src={socialImg.imgPath}
                alt={`${socialImg.name} icon`}
                className="w-5 h-5"
              />
            </a>
          ))}
        </div>

        {/* Legal and Privacy Links - appear second on mobile */}
        <div className="order-2 sm:order-none flex justify-center sm:justify-start items-center gap-2">
          <Link to="/legal" className="link-fancy">
            <span>Legal</span>
            <span className="underline" />
          </Link>
          <span className="text-white-50">|</span>
          <Link to="/privacy" className="link-fancy">
            <span>Privacy</span>
            <span className="underline" />
          </Link>
        </div>

        {/* Signature - appears last on mobile */}
        <div className="order-3 sm:order-none flex justify-center sm:justify-end">
          <p className="text-center sm:text-end">
            <span className="font-semibold">© {new Date().getFullYear()} Yauheniya.AI</span> | All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
