import { useRef, useState } from "react";
import TitleHeader from "../components/TitleHeader";
import ContactExperience from "../components/models/contact/ContactExperience";

const Contact = () => {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);
    try {
      const response = await fetch("https://formspree.io/f/mdkgovyw", {
        method: "POST",
        headers: {
          "Accept": "application/json",
        },
        body: new FormData(formRef.current),
      });
      const data = await response.json();
      if (data.ok) {
        setSuccess({
          type: "success",
          message: `Thank you, <span style="color:#52bcff">${form.name}</span>. We will get back at you within 24 hours via email: <span style="color:#52bcff">${form.email}</span>.`
        });
        setForm({ name: "", email: "", message: "" });
      } else {
        setSuccess({
          type: "error",
          message: "Sorry, something went wrong. Please try again later."
        });
      }
    } catch (error) {
      setSuccess({
        type: "error",
        message: "Sorry, something went wrong. Please try again later."
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
            sub={
              <span className="flex items-center gap-2">
                <img 
                  src="/public/images/robot-arm.svg" 
                  width="24" 
                  height="24" 
                  alt="Robot arm"
                  className="text-white transform scale-x-[-1]"
                  style={{ transform: 'scaleX(+1)' }}
                />
                Let's automate!
                <img 
                  src="/public/images/robot-arm.svg" 
                  width="24" 
                  height="24" 
                  alt="Robot arm"
                  className="text-white"
                />

              </span>
            }
            title="Which AI Agents Do You Develop?"
          />
        <div className="grid-12-cols mt-16">
          <div className="xl:col-span-5">
            <div className="flex-center card-border rounded-xl p-10">
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="w-full flex flex-col gap-7"
                method="POST"
                action="https://formspree.io/f/mdkgovyw"
              >
                <div>
                  <label htmlFor="name">Your name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="What’s your name?"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="What’s your email?"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="How can I help you?"
                    rows="5"
                    required
                  />
                </div>

                <button type="submit" disabled={loading}>
                  <div className="cta-button group">
                    <div className="bg-circle" />
                    <p className="text">
                      {loading ? "Sending..." : "Send Message"}
                    </p>
                    <div className="arrow-wrapper">
                      <img src="/images/arrow-down.svg" alt="arrow" />
                    </div>
                  </div>
                </button>
                {success && (
                  <p
                    className="mt-4 text-center"
                    style={{ color: success.type === "error" ? "#ea2081" : "white" }}
                    dangerouslySetInnerHTML={{ __html: success.message }}
                  />
                )}

              </form>
            </div>
          </div>
          <div className="xl:col-span-7 min-h-96">
            <div className="w-full h-full hover:cursor-grab rounded-3xl overflow-hidden bg-transparent">
              <ContactExperience />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
