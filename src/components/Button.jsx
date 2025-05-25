import { forwardRef } from "react";

const Button = forwardRef(({ className, id }, ref) => {
  return (
    <a
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        const target = document.getElementById(id);
        if (target) {
          const offset = window.innerHeight * 0.15;
          const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
          window.scrollTo({ top, behavior: "smooth" });
        }
      }}
      className={`${className ?? ""} group`}
      aria-label="Scroll to next section"
    >
      {/* Bouncing Circle (animated via GSAP) */}
      <div className="circle-container w-14 h-14 rounded-full bg-[var(--color-white-50)] group-hover:bg-white group-active:bg-white transition-colors duration-300 flex items-center justify-center">
        {/* Stationary Arrow */}
        <svg 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="text-black"
        >
          <path 
            d="M12 5V19M12 19L19 12M12 19L5 12" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </a>
  );
});

Button.displayName = "Button";

export default Button;