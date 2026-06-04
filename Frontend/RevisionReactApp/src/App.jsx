import profile from "./assets/photo1.jpeg";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
  FaDownload,
} from "react-icons/fa";

function App() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node.js",
    "Express",
    "MongoDB",
    "Cloud Computing",
    "IoT",
    "Git",
  ];

  const projects = [
    {
      title: "Learning Management System",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800",
    },
    {
      title: "Bluetooth Door Lock System",
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800",
    },
    {
      title: "Cloud Dashboard",
      image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800",
    },
  ];

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top glass-nav">
        <div className="container">
          <a className="navbar-brand fw-bold logo" href="/">
            Prasoon.dev
          </a>

          <div className="d-flex gap-4">
            <a href="#home" className="nav-link text-light">
              Home
            </a>
            <a href="#about" className="nav-link text-light">
              About
            </a>
            <a href="#skills" className="nav-link text-light">
              Skills
            </a>
            <a href="#projects" className="nav-link text-light">
              Projects
            </a>
            <a href="#contact" className="nav-link text-light">
              Contact
            </a>
          </div>
        </div>
      </nav>

      <div className="portfolio">
        {/* HERO */}

        <section id="home" className="container hero-section">
          <div className="row align-items-center">
            <motion.div
              className="col-lg-6"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <h5 className="text-info">👋 Hello, I'm</h5>

              <h1 className="hero-title">Prasoon Soni</h1>

              <TypeAnimation
                sequence={[
                  "MERN Stack Developer",
                  2000,
                  "Cloud Computing Enthusiast",
                  2000,
                  "IoT Developer",
                  2000,
                ]}
                speed={40}
                repeat={Infinity}
                className="typing"
              />

              <p className="hero-text">
                Passionate engineering student building modern web applications
                and exploring Cloud Computing, IoT and scalable technologies.
              </p>

              <div className="d-flex gap-3 mt-4">
                <button className="btn btn-primary glow-btn">Hire Me</button>

                <button className="btn btn-outline-info">
                  <FaDownload /> Resume
                </button>
              </div>

              <div className="social-icons">
                <FaGithub />
                <FaLinkedin />
                <FaInstagram />
                <FaEnvelope />
              </div>
            </motion.div>

            <motion.div
              className="col-lg-6 text-center"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            >
              <motion.img
                src={profile}
                alt="profile"
                className="profile-img"
                animate={{
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
              />
            </motion.div>
          </div>
        </section>

        {/* ABOUT */}

        <motion.section
          id="about"
          className="container py-5"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">About Me</h2>

          <div className="glass-card">
            <p>
              I am a B.Tech student from RGPV and currently learning MERN Stack
              Development. I enjoy building modern applications, exploring Cloud
              Computing and developing IoT-based solutions.
            </p>
          </div>
        </motion.section>

        {/* SKILLS */}

        <section id="skills" className="container py-5">
          <h2 className="section-title">Skills</h2>

          <div className="row g-4">
            {skills.map((skill, index) => (
              <div className="col-md-3" key={index}>
                <motion.div
                  whileHover={{
                    scale: 1.08,
                    y: -10,
                  }}
                  className="skill-card"
                >
                  <h5>{skill}</h5>
                </motion.div>
              </div>
            ))}
          </div>
        </section>

        {/* PROJECTS */}

        <section id="projects" className="container py-5">
          <h2 className="section-title">Projects</h2>

          <div className="row g-4">
            {projects.map((project, index) => (
              <div className="col-lg-4" key={index}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="project-card"
                >
                  <img src={project.image} alt="" className="project-img" />

                  <div className="p-3">
                    <h4>{project.title}</h4>

                    <button className="btn btn-info mt-2">View Project</button>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </section>

        {/* CONTACT */}

        <section id="contact" className="container py-5">
          <h2 className="section-title">Contact</h2>

          <div className="glass-card text-center">
            <h3>Let's Build Something Amazing 🚀</h3>

            <p className="mt-3">
              Available for internships and freelance projects.
            </p>

            <button className="btn btn-primary glow-btn">Contact Me</button>
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
