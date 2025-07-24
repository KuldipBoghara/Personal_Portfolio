import { motion } from 'framer-motion';
import styles from './Section.module.css';

const Projects = () => (
  <motion.section
    className={styles.section}
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
  >
    <h2>Projects</h2>
    <div
      style={{
        display: 'flex',
        gap: '1rem',
        flexWrap: 'wrap',
        justifyContent: 'center'
      }}
    >
      <motion.div className={styles.card} whileHover={{ scale: 1.05 }}>
        <h3>Quote AI Generator</h3>
        <p>Generates quotes using AI (React, Firebase, Cohere)</p>
        <a
          href="https://github.com/KuldipBoghara/Quote_AI"
          target="_blank"
          rel="noopener noreferrer"
        >
          View on GitHub
        </a>
      </motion.div>
      <motion.div className={styles.card} whileHover={{ scale: 1.05 }}>
        <h3>More Coming Soon...</h3>
        <p>Stay tuned for upcoming projects.</p>
      </motion.div>
    </div>
  </motion.section>
);

export default Projects;
