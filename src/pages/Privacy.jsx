import BrainSvg from "../components/BrainSvg";

export default function Privacy() {
  return (
    <section className="relative overflow-hidden min-h-screen">
      <div className="absolute top-0 left-0 z-10">
        <BrainSvg />
      </div>

      {/* Content layout */}
      <div className="hero-layout flex flex-col justify-center items-start md:px-20 px-5 z-20">
        <div className="hero-text max-w-3xl mb-8">
          <h1>Privacy Policy</h1>
        </div>

        <div className="text-white-50 max-w-3xl">
          <p>
            This website collects personal data (name and email address) only when you submit the contact form. The data collected is solely used to respond to your inquiry. Your privacy is important to us, and we are committed to protecting your personal information.
          </p>
          <p className="mt-4">
            In addition to the data we collect, we use third-party services for certain functionalities on this site. Please review the privacy policies of these services to understand how they handle your data:
          </p>
          <ul className="list-diamond mt-2 space-y-2">
            <li>
                <a
                    href="https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-fancy"
                >
                    <span>GitHub Privacy Policy</span>
                    <span className="underline" />
              </a>
            </li>
            <li>
                <a
                    href="https://formspree.io/legal/privacy-policy/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-fancy"
                >
                    <span>Formspree Privacy Policy</span>
                    <span className="underline" />
                </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
