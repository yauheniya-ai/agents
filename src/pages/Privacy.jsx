import BrainSvg from "../components/BrainSvg";

export default function Privacy() {
  return (
    <section className="relative overflow-hidden min-h-screen">
      <div className="absolute top-0 left-0 z-10">
        <BrainSvg />
      </div>

      {/* Content layout */}
      <div className="hero-layout flex flex-col justify-center items-start md:px-20 px-5 z-20 pt-128 pb-64">
        <div className="hero-text max-w-3xl mb-8">
          <h1>Privacy Policy</h1>
          <p className="block text-base text-white-50 mt-32">Last updated: June 17, 2025</p>
        </div>

        <div className="text-white-50 max-w-5xl space-y-4">
          <p>
            This website collects personal data (such as your name and email address) only when you submit the contact form. The data collected is solely used to respond to your inquiry. Your privacy is important to us, and we are committed to protecting your personal information.
          </p>

          <p>
            In addition to the data we collect directly, we use third-party services for certain functionalities on this site:
          </p>

          <ul className="list-diamond mt-2 space-y-4 pl-6">
            <li>
              <span className="font-semibold">Google Analytics</span>
              <p className="mt-1">
                We use Google Analytics to help us understand how visitors interact with our website. Google Analytics collects information such as your IP address, browser type, pages visited, and time spent on the site. This data is used in aggregate to improve our website and does not identify you personally.
                <br />
                You can learn more about how Google collects and processes data{" "}
                <a
                  href="https://policies.google.com/technologies/partner-sites"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-fancy text-white"
                >
                  <span>here</span>
                  <span className="underline" />
                </a>
                . If you wish to opt out of Google Analytics tracking, you can use the{" "}
                <a
                  href="https://tools.google.com/dlpage/gaoptout"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-fancy text-white"
                >
                  <span>Google Analytics Opt-out Browser Add-on</span>
                  <span className="underline" />
                </a>
                .
              </p>
            </li>
            <li>
              <span className="font-semibold">GitHub</span>
              <p className="mt-1">
                Our website is hosted on GitHub Pages. Please review the{" "}
                <a
                  href="https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-fancy text-white"
                >
                  <span>GitHub Privacy Policy</span>
                  <span className="underline" />
                </a>{" "}
                for information on how GitHub handles your data.
              </p>
            </li>
            <li>
              <span className="font-semibold">Formspree</span>
              <p className="mt-1">
                We use Formspree to process contact form submissions. Please review the{" "}
                <a
                  href="https://formspree.io/legal/privacy-policy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-fancy text-white"
                >
                  <span>Formspree Privacy Policy</span>
                  <span className="underline" />
                </a>{" "}
                to understand how your data is handled.
              </p>
            </li>
          </ul>

          <p>
            <strong>Your Rights:</strong> You have the right to request access to, correction of, or deletion of your personal data collected through the contact form. To make such a request, please contact us via the contact form provided on this website.
          </p>

        </div>
      </div>
    </section>
  );
}
