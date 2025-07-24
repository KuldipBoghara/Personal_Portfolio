import { motion } from 'framer-motion';
import styles from './Section.module.css';

const Experience = () => (
  <motion.section
    className={styles.section}
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
  >
    <h2>Experience</h2>
    <ul>
      <li>
        <strong>Software Developer @ CN Tower</strong> (2023–2025)
      </li>
      <li>
        <strong>Front-end Dev @ Harsh Infotech</strong> (2022–2023)
      </li>
    </ul>
  </motion.section>
);

export default Experience;
