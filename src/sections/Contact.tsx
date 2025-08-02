import { motion } from 'framer-motion';

const Contact = () => (
  <motion.section
    className="max-w-3xl mx-auto px-8 py-16 text-center"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
  >
    <h2 className="text-3xl font-bold mb-6">Contact</h2>
    <p className="text-lg text-gray-700">
      Email:{' '}
      <a
        className="text-blue-600 hover:underline"
        href="mailto:kuldip@example.com"
      >
        bogharakuldip@gmail.com
      </a>
    </p>
    <p className="text-lg text-gray-700">
      GitHub:{' '}
      <a
        className="text-blue-600 hover:underline"
        href="https://github.com/kuldipboghara"
        target="_blank"
      >
        github.com/kuldipboghara
      </a>
    </p>
    <p className="text-lg text-gray-700">
      LinkedIn:{' '}
      <a
        className="text-blue-600 hover:underline"
        href="https://www.linkedin.com/in/kuldip-boghara/"
        target="_blank"
      >
        linkedin.com/in/kuldipboghara
      </a>
    </p>
  </motion.section>
);

export default Contact;
