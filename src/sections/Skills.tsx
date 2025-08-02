import { motion } from 'framer-motion';
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
    className="max-w-3xl mx-auto px-8 py-16 text-center"
    variants={containerVariants}
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
  >
    <h2 className="text-3xl font-bold mb-8">Skills</h2>
    <motion.div
      className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 justify-items-center max-w-xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, staggerChildren: 0.1 }}
    >
      <motion.div variants={iconVariant}>
        <SkillIcon logo={reactLogo} name="React" level={90} />
      </motion.div>
      <motion.div variants={iconVariant}>
        <SkillIcon logo={jsLogo} name="JS" level={90} />
      </motion.div>
      <motion.div variants={iconVariant}>
        <SkillIcon logo={htmlLogo} name="HTML" level={90} />
      </motion.div>
      <motion.div variants={iconVariant}>
        <SkillIcon logo={cssLogo} name="CSS" level={90} />
      </motion.div>
    </motion.div>
  </motion.section>
);

export default Skills;
