import { useRef, useState } from 'react';
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

  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  const sectionVariant = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="pt-[100px] overflow-x-hidden app bg-black text-green-400 min-h-screen">
      {/* Navbar */}
      <div className="fixed top-0 left-0 right-0 z-[1000]">
        <nav className="w-full mx-auto px-8 py-4 grid grid-cols-[1fr_auto_1fr] items-center navbar backdrop-blur bg-black/70 shadow-md text-green-400 relative z-[1001]">
          <div className="flex items-center justify-between w-full col-span-3 md:col-span-1">
            <h1 className="text-2xl font-bold text-green-300">
              Kuldip Boghara
            </h1>
            <div
              className="flex flex-col gap-1 md:hidden cursor-pointer"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span className="h-[3px] w-6 bg-gray-800 transition-all"></span>
              <span className="h-[3px] w-6 bg-gray-800 transition-all"></span>
              <span className="h-[3px] w-6 bg-gray-800 transition-all"></span>
            </div>
          </div>

          <div
            className={`${
              menuOpen ? 'flex' : 'hidden'
            } md:flex flex-col md:flex-row items-center justify-center gap-4 mt-4 md:mt-0 col-span-3 md:col-span-1`}
          >
            <ul className="flex flex-col md:flex-row gap-4 items-center list-none m-0 p-0">
              <li
                onClick={() => scrollToSection(aboutRef)}
                className="cursor-pointer font-medium hover:text-blue-600"
              >
                About
              </li>
              <li
                onClick={() => scrollToSection(skillsRef)}
                className="cursor-pointer font-medium hover:text-blue-600"
              >
                Skills
              </li>
              <li
                onClick={() => scrollToSection(experienceRef)}
                className="cursor-pointer font-medium hover:text-blue-600"
              ></li>
              <li
                onClick={() => scrollToSection(projectsRef)}
                className="cursor-pointer font-medium hover:text-blue-600"
              >
                Projects
              </li>
              <li
                onClick={() => scrollToSection(contactRef)}
                className="cursor-pointer font-medium hover:text-blue-600"
              >
                Contact
              </li>
              <a
                className="block md:hidden w-full text-center bg-green-600 hover:bg-green-500 text-black font-bold px-4 py-2 rounded transition-all mt-2"
                href="/Resume Kuldip Boghara.pdf"
                download
              >
                DOWNLOAD CV
              </a>
            </ul>
          </div>

          <a
            className="hidden md:inline-block justify-self-end bg-green-600 hover:bg-green-500 text-black font-bold px-4 py-2 rounded-md transition-all"
            href="/Resume Kuldip Boghara.pdf"
            download
          >
            DOWNLOAD CV
          </a>
        </nav>
      </div>

      <Hero />

      {/* Sections */}
      <motion.div
        layout
        ref={aboutRef}
        className="max-w-5xl mx-auto px-8 py-16"
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
        className="max-w-5xl mx-auto px-8 py-16"
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
        className="max-w-5xl mx-auto px-8 pt-16 pb-8"
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
        className="max-w-5xl mx-auto px-8 pt-16 pb-8"
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
        className="max-w-5xl mx-auto px-8 py-16"
        variants={sectionVariant}
        initial="hidden"
        animate="visible"
        viewport={{ once: true }}
      >
        <Contact />
      </motion.div>
    </div>
  );
}

export default App;
