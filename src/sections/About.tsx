import { motion } from 'framer-motion';

const About = () => (
  <motion.section
    className="max-w-3xl mx-auto px-8 py-16 text-center"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
  >
    <h2 className="text-3xl font-bold mb-6">About Me</h2>
    <p className="text-lg leading-relaxed text-gray-700">
      I'm a front-end developer with over 2 years of experience specializing in
      user interface design and development. I've worked at companies like
      Walmart, CN Tower, and Harsh Infotech, using technologies like React,
      TypeScript, and Redux.
    </p>
  </motion.section>
);

export default About;
