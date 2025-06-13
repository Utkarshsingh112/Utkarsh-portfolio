import { motion } from 'framer-motion';
import { CodeBracketIcon, AcademicCapIcon, BriefcaseIcon, RocketLaunchIcon } from '@heroicons/react/24/outline';

const stats = [
  {
    icon: CodeBracketIcon,
    value: "1+",
    label: "Year of Experience",
    color: "text-blue-500 dark:text-blue-400"
  },
  {
    icon: AcademicCapIcon,
    value: "B.Tech",
    label: "Final Year Student",
    color: "text-purple-500 dark:text-purple-400"
  },
  {
    icon: BriefcaseIcon,
    value: "3+",
    label: "Internships",
    color: "text-orange-500 dark:text-orange-400"
  },
  {
    icon: RocketLaunchIcon,
    value: "3+",
    label: "Projects Completed",
    color: "text-green-500 dark:text-green-400"
  }
];

const About = () => {
  return (
    <section id="about" className="relative py-12 rounded-3xl mx-4 my-2 overflow-hidden">
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] dark:opacity-[0.05]" />
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 mx-auto bg-primary-500 dark:bg-primary-400 rounded-full mb-4" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="prose dark:prose-invert mx-auto text-lg">
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Hey, I'm Utkarsh — a web developer passionate about creating clean, responsive, and intuitive websites.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                I'm currently in my final year of B.Tech at Arya Institute of Engineering & Technology.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                With multiple internships under my belt, I've worked on real-world projects that blend modern design with functional code — especially using JavaScript, React, and other web technologies.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                I believe in writing clean code, building smooth user experiences, and always learning what's next in tech.
              </p>
            </div>
          </motion.div>

          {/* Right Column - Stats & Interactive Elements */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6 perspective-1000"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.5, 
                  delay: 0.1 * index,
                  ease: "easeOut"
                }}
                whileHover={{ 
                  scale: 1.03,
                  y: -8,
                  rotateX: 2,
                  transition: { 
                    duration: 0.4,
                    ease: [0.4, 0, 0.2, 1]
                  }
                }}
                style={{
                  transformStyle: "preserve-3d",
                  transform: "perspective(1000px)"
                }}
                className="group relative bg-white/60 dark:bg-gray-800/60 backdrop-blur-lg rounded-2xl p-6
                          border border-gray-200/50 dark:border-gray-700/50
                          shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] dark:shadow-[0_4px_20px_-4px_rgba(0,0,0,0.3)]
                          hover:shadow-[0_20px_40px_-8px_rgba(0,0,0,0.2)] dark:hover:shadow-[0_20px_40px_-8px_rgba(0,0,0,0.5)]
                          hover:border-primary-200/50 dark:hover:border-primary-700/50
                          transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]
                          will-change-transform"
              >
                <motion.div 
                  className={`w-14 h-14 rounded-xl ${stat.color} bg-opacity-10 dark:bg-opacity-20 
                            flex items-center justify-center mb-5 
                            group-hover:scale-110 group-hover:rotate-3 
                            transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]
                            will-change-transform`}
                  style={{ transform: "translateZ(20px)" }}
                >
                  <stat.icon className="w-7 h-7 transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] 
                                     group-hover:rotate-12" />
                </motion.div>
                <motion.div 
                  className="text-3xl font-bold text-gray-900 dark:text-white mb-2 
                           transition-colors duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]"
                  style={{ transform: "translateZ(10px)" }}
                >
                  {stat.value}
                </motion.div>
                <motion.div 
                  className="text-sm font-medium text-gray-600 dark:text-gray-400 
                           transition-colors duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]"
                  style={{ transform: "translateZ(5px)" }}
                >
                  {stat.label}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Tech Stack Tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12"
        >
        </motion.div>
      </div>
    </section>
  );
};

export default About; 