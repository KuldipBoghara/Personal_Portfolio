import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <motion.section
      className="h-[70vh] flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 to-white px-8 text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h1
        className="text-4xl md:text-5xl font-bold mb-4"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        Hi, I'm Kuldip
      </motion.h1>
      <motion.p
        className="text-lg text-gray-600"
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
