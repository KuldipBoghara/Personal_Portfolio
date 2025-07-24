import { motion } from 'framer-motion';
import styles from './Section.module.css';

const About = () => (
  <motion.section
    className={styles.section}
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
  >
    <h2>About Me</h2>
    <p>
      I'm a front-end developer with over 2 years of experience specializing in
      user interface design and development. I've worked at companies like
      Walmart, CN Tower, and Harsh Infotech, using technologies like React,
      TypeScript, and Redux.
    </p>
  </motion.section>
);

export default About;
