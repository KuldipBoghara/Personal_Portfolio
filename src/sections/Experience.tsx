import { motion } from 'framer-motion';

const experiences = [
  {
    role: 'Software Developer',
    company: 'CN Tower',
    duration: '2023–2025',
    skills: ['React', 'TypeScript', 'Redux Toolkit', 'MongoDB', 'REST API']
  },
  {
    role: 'Front-end Developer',
    company: 'Harsh Infotech',
    duration: '2022–2023',
    skills: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Git']
  }
];

const Experience = () => {
  return (
    <motion.section
      className="px-4 py-12 text-green-400 bg-black font-mono"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-bold text-center text-green-300 mb-12 tracking-widest">
        Experience
      </h2>

      <div className="relative border-l-2 border-green-500 pl-6 space-y-12 max-w-4xl mx-auto">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="relative"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { delay: index * 0.2, duration: 0.5, ease: 'easeOut' }
            }}
            viewport={{ once: true, amount: 0.5 }}
          >
            {/* Timeline dot */}
            <div className="absolute -left-[10px] top-2 w-4 h-4 bg-green-400 rounded-full border-2 border-black shadow-[0_0_10px_#00ff9f]" />

            {/* Card */}
            <div className="bg-[#0a0f0d] border border-green-500 p-5 rounded-lg shadow-[0_0_12px_#00ff9f]">
              <h3 className="text-lg md:text-xl font-semibold text-green-300">
                {exp.role}
              </h3>
              <p className="text-green-400">{exp.company}</p>
              <p className="text-sm text-green-600 mb-3">{exp.duration}</p>

              <div className="flex flex-wrap gap-2">
                {exp.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="text-xs bg-black border border-green-400 text-green-300 px-2 py-1 rounded hover:bg-green-400 hover:text-black transition duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Experience;
