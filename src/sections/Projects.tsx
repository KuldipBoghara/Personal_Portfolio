import { motion } from 'framer-motion';

const Projects = () => (
  <motion.section
    className="max-w-5xl mx-auto px-4 py-12 text-green-400 bg-black font-mono"
    initial={{ opacity: 0, y: 60 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
  >
    <h2 className="text-3xl font-bold text-center text-green-300 mb-12 tracking-widest">
      Projects
    </h2>

    <div className="flex flex-wrap justify-center gap-6">
      <motion.div
        className="bg-[#0a0f0d] border border-green-500 text-left text-green-300 p-6 rounded-lg shadow-[0_0_12px_#00ff9f] w-64 hover:shadow-[0_0_18px_#00ff9f] transition-transform hover:scale-105"
        whileHover={{ scale: 1.05 }}
      >
        <h3 className="text-xl font-semibold mb-2">Quote AI Generator</h3>
        <p className="text-sm text-green-400 mb-2">
          Generates quotes using AI (React, Firebase, Cohere)
        </p>
        <a
          className="text-green-300 font-semibold hover:underline hover:text-green-500"
          href="https://github.com/KuldipBoghara/Quote_AI"
          target="_blank"
          rel="noopener noreferrer"
        >
          View on GitHub
        </a>
      </motion.div>

      <motion.div
        className="bg-[#0a0f0d] border border-green-500 text-left text-green-300 p-6 rounded-lg shadow-[0_0_12px_#00ff9f] w-64 hover:shadow-[0_0_18px_#00ff9f] transition-transform hover:scale-105"
        whileHover={{ scale: 1.05 }}
      >
        <h3 className="text-xl font-semibold mb-2">More Coming Soon...</h3>
        <p className="text-sm text-green-400">
          Stay tuned for upcoming projects.
        </p>
      </motion.div>
    </div>
  </motion.section>
);

export default Projects;
