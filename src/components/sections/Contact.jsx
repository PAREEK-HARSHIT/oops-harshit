import React from "react";
import { RevealOnScroll } from "./revealOnScroll";
import emailjs from "emailjs-com";
import { Result } from "postcss";
const Contact = () => {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    message: "",
  });

  
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(import.meta.env.VITE_SERVICE_ID , 
      import.meta.env.VITE_TEMPLATE_ID, 
      e.target, 
      import.meta.env.VITE_PUBLIC_KEY)
    .then((Result) => {
      alert("Message sent successfully!");
      setFormData({
        name: "",
        email: "",
        message: ""
      })
    })
    .catch((error) => {
      console.error("Error sending message:", error);
      alert("Failed to send message. Please try again later.");
    })
  };
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="px-4 w-150">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Get In Touch
          </h2>

          {/* Contact Form  */}
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="relative">
              <input
                className="w-full bg-white/5 border border-white/10 rounded px-5 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                type="text"
                id="name"
                name="name"
                value={formData.name}
                placeholder="Name..."
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>

            <div className="relative">
              <input
                className="w-full bg-white/5 border border-white/10 rounded px-5 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                type="email"
                id="email"
                name="email"
                value={formData.email}
                placeholder="example@gmail.com"
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>

            <div className="relative">
              <textarea
                className="w-full bg-white/5 border border-white/10 rounded px-5 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                placeholder="Your Message..."
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,)]"
            >
              Send Message
            </button>
          </form>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Contact;
