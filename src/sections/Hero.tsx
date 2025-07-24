import { motion } from 'framer-motion';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <motion.section
      className={styles.hero}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h1
        className={styles.title}
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        Hi, I'm Kuldip
      </motion.h1>
      <motion.p
        className={styles.subtitle}
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        A Front-End Developer passionate about clean UI and web experiences.
      </motion.p>
    </motion.section>
  );
};

export default Hero;
