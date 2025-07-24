import { useRef, useEffect, useState } from 'react';
import './App.css';
import Hero from './sections/Hero';
import About from './sections/About';
import Experience from './sections/Experience';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import { motion } from 'framer-motion';

function App() {
  const aboutRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const [showTop, setShowTop] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false); // ✅ Close menu on click
  };

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);
      setShowTop(scrollTop > 200);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const sectionVariant = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="app">
      <div
        className="scroll-progress"
        style={{ width: `${scrollProgress}%` }}
      ></div>

      <div className="navbar-wrapper">
        <nav className="navbar box-shadow">
          <div className="navbar-header">
            <div className="navbar-logo">Kuldip Boghara</div>
            <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          <div className={`nav-center ${menuOpen ? 'open' : ''}`}>
            <ul className="nav-links">
              <li
                onClick={() => {
                  scrollToSection(aboutRef);
                  setMenuOpen(false);
                }}
              >
                About
              </li>
              <li
                onClick={() => {
                  scrollToSection(skillsRef);
                  setMenuOpen(false);
                }}
              >
                Skills
              </li>
              <li
                onClick={() => {
                  scrollToSection(experienceRef);
                  setMenuOpen(false);
                }}
              >
                Experience
              </li>
              <li
                onClick={() => {
                  scrollToSection(projectsRef);
                  setMenuOpen(false);
                }}
              >
                Projects
              </li>
              <li
                onClick={() => {
                  scrollToSection(contactRef);
                  setMenuOpen(false);
                }}
              >
                Contact
              </li>

              {/* ✅ Mobile-only CV Button */}
              <a
                className="cv-button mobile"
                href="/Resume Kuldip Boghara.pdf"
                download
              >
                DOWNLOAD CV
              </a>
            </ul>
          </div>

          {/* ✅ Desktop-only CV Button */}
          <a
            className="cv-button desktop"
            href="/Resume Kuldip Boghara.pdf"
            download
          >
            DOWNLOAD CV
          </a>
        </nav>
      </div>

      <Hero />

      <motion.div
        layout
        ref={aboutRef}
        className="section-container"
        variants={sectionVariant}
        initial="hidden"
        animate="visible"
        viewport={{ once: true }}
      >
        <About />
      </motion.div>

      <motion.div
        layout
        ref={skillsRef}
        className="section-container"
        variants={sectionVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <Skills />
      </motion.div>

      <motion.div
        layout
        ref={experienceRef}
        className="section-container"
        variants={sectionVariant}
        initial="hidden"
        animate="visible"
        viewport={{ once: true }}
      >
        <Experience />
      </motion.div>

      <motion.div
        layout
        ref={projectsRef}
        className="section-container"
        variants={sectionVariant}
        initial="hidden"
        animate="visible"
        viewport={{ once: true }}
      >
        <Projects />
      </motion.div>

      <motion.div
        layout
        ref={contactRef}
        className="section-container"
        variants={sectionVariant}
        initial="hidden"
        animate="visible"
        viewport={{ once: true }}
      >
        <Contact />
      </motion.div>

      {showTop && (
        <button className="back-to-top" onClick={scrollToTop}>
          ⬆ Top
        </button>
      )}
    </div>
  );
}

export default App;
