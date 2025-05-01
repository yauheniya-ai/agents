import { Link } from "react-router-dom";
import { socialImgs } from "../constants";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="flex flex-row justify-center sm:justify-start items-center gap-2">
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

        <div className="socials flex gap-4">
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

        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
            <span className="font-semibold">© {new Date().getFullYear()} Yauheniya.AI</span> | All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
