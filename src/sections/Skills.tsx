import { motion } from 'framer-motion';
import styles from './Skills.module.css';
import SkillIcon from '../components/SkillIcon';

import reactLogo from '../assets/react.svg';
import jsLogo from '../assets/js.svg';
import htmlLogo from '../assets/html.svg';
import cssLogo from '../assets/css.svg';

const iconVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3
    }
  }
};

const Skills = () => (
  <motion.section
    className={styles.section}
    variants={containerVariants}
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
  >
    <h2>Skills</h2>
    <motion.div
      className={styles.skillsGrid}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, staggerChildren: 0.1 }}
    >
      <motion.div variants={iconVariant}>
        <SkillIcon logo={reactLogo} name="React" level={90} />
      </motion.div>
      <motion.div variants={iconVariant}>
        <SkillIcon logo={jsLogo} name="js" level={90} />
      </motion.div>
      <motion.div variants={iconVariant}>
        <SkillIcon logo={htmlLogo} name="html" level={90} />
      </motion.div>
      <motion.div variants={iconVariant}>
        <SkillIcon logo={cssLogo} name="css" level={90} />
      </motion.div>
    </motion.div>
  </motion.section>
);

export default Skills;
