import BrainSvg from "../components/BrainSvg";

export default function Legal() {
  return (
    <section className="relative overflow-hidden min-h-screen">
      <div className="absolute top-0 left-0 z-10">
        <BrainSvg />
      </div>

      {/* Content layout */}
      <div className="hero-layout flex flex-col justify-center items-start md:px-20 px-5 z-20">
        <div className="hero-text max-w-3xl mb-8">
          <h1>Legal Notice</h1>
        </div>

        <div className="text-white-50 max-w-3xl mt-32">
          <p>This website is owned and operated by:</p>
          <p className="mt-2">
            <strong>Yauheniya Varabyova</strong><br />
            Berlin, Germany<br />
            VAT ID: DE325919733
          </p>
          <p className="mt-4">
            I am responsible for the content of this site according to § 5 TMG.
          </p>
          <p className="mt-4">
            For inquiries, please use the contact form provided on this website.
          </p>          
        </div>
      </div>
    </section>
  );
}
