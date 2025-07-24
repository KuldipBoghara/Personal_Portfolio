import { motion } from 'framer-motion';
import styles from './Section.module.css';

const Contact = () => (
  <motion.section
    className={styles.section}
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
  >
    <h2>Contact</h2>
    <p>
      Email: <a href="mailto:kuldip@example.com">bogharakuldip@gmail.com</a>
    </p>
    <p>
      GitHub:{' '}
      <a href="https://github.com/kuldipboghara" target="_blank">
        github.com/kuldipboghara
      </a>
    </p>
    <p>
      LinkedIn:{' '}
      <a href="https://www.linkedin.com/in/kuldip-boghara/" target="_blank">
        linkedin.com/in/kuldipboghara
      </a>
    </p>
  </motion.section>
);

export default Contact;
