import React, { useState } from "react";
import { RevealOnScroll } from "./revealOnScroll";
const About = () => {
  const frontendSkills = ["HTML", "CSS", "JavaScript", "Tailwind", "React"];
  const backendSkills = [
    "Node.js",
    "Express.js",
    "MongoDB",
    "SQL",
    "PostgreSQL",
    "Python",
  ];

  // Add state for expanding work experience descriptions
  const [expanded, setExpanded] = useState([false, false]);

  // Work experience data
  const workExperiences = [
    {
      title:
        "Software Developer Intern at Advaiya Solution Inc. (Jan 2025 - Present)",
      description:
        "As a Software Developer Intern, I build responsive React.js frontend components to improve UI performance and user experience while collaborating with the team to transform ideas into functional prototypes, ensuring efficient workflows and timely project delivery.",
    },
    {
      title: "Python Intern at HDLC Technologies (Feb 2023 - March 2023)",
      description: "Completed a Python-focused internship, progressing from basic to expert-level techniques while gaining proficiency in libraries like NumPy, Pandas, and Matplotlib for data analysis and visualization. Contributed to projects that strengthened my practical understanding of Python’s real-world applications.",
    },
  ];

  // Helper to get first two words
  const getFirstWords = (text, count = 2) => {
    const words = text.split(" ");
    return (
      words.slice(0, count).join(" ") + (words.length > count ? " ..." : "")
    );
  };

  return (
    <section id="about" className="min-h-screen flex justify-center py-20">
      <RevealOnScroll>
        <div className="max-w-4xl mx-auto px-4 w-full">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            About Me
          </h2>
          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
            <p className="text-gray-300 mb-6 text-center">
              I’m a full-stack developer passionate about building scalable web
              applications that combine strong functionality with intuitive
              design. I strive to deliver seamless, engaging user experiences.
            </p>

            {/* skills section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* frontend skills */}
              <div className="rounded-xl p-6 hover:translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 font-medium hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* backend skills */}
              <div className="rounded-xl p-6 hover:translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 font-medium hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* education and work section */}
          <div className="grid grid-cols-1 md:grid-cols-2 mt-8 gap-6">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
              <h3 className="text-xl font-bold mb-4">Education</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong>
                    B.Tech in Artificial Intelligence & Data Science
                  </strong>{" "}
                  - MPUAT University (2021-2025)
                </li>
                <li>
                  Relevant Course Work: C++, OOPS , Data Structures, Algorithms, Web
                  Development, Database Management Systems...
                </li>
              </ul>
            </div>
            {/* Work Experience section */}
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
              <h3 className="text-xl font-bold mb-4">Work Experience</h3>
              <div className="space-y-4 text-gray-300">
                {workExperiences.map((exp, idx) => (
                  <div key={idx}>
                    <h4 className="font-semibold">{exp.title}</h4>
                    <p>
                      {expanded[idx]
                        ? exp.description
                        : (() => {
                            const words = exp.description.split(" ");
                            if (words.length > 3) {
                              return (
                                <>
                                  {words.slice(0, 4).join(" ")}
                                  <button
                                    className="text-blue-400 ml-1 focus:outline-none"
                                    style={{
                                      background: "none",
                                      border: "none",
                                      padding: 0,
                                      cursor: "pointer",
                                    }}
                                    onClick={() => {
                                      const newExpanded = [...expanded];
                                      newExpanded[idx] = true;
                                      setExpanded(newExpanded);
                                    }}
                                  >
                                    ...
                                  </button>
                                </>
                              );
                            } else {
                              return exp.description;
                            }
                          })()}
                      {expanded[idx] &&
                        exp.description.split(" ").length > 3 && (
                          <button
                            className="text-blue-400 ml-2 focus:outline-none"
                            style={{
                              background: "none",
                              border: "none",
                              padding: 0,
                              cursor: "pointer",
                            }}
                            onClick={() => {
                              const newExpanded = [...expanded];
                              newExpanded[idx] = false;
                              setExpanded(newExpanded);
                            }}
                          >
                            Show less
                          </button>
                        )}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default About;
