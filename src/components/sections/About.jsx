import { motion } from 'framer-motion';
import { CodeBracketIcon, AcademicCapIcon, BriefcaseIcon, RocketLaunchIcon } from '@heroicons/react/24/outline';

// Animation variants for text highlights (from Pop.jsx)
const highlightVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 15,
    },
  },
  hover: {
    scale: 1.1,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10,
    },
  },
};

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
    <section id="about" className="relative py-10 md:py-12 rounded-3xl mx-4 my-2 overflow-hidden scroll-mt-24 md:scroll-mt-28">
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
                Hey, I'm{" "}
                <motion.span
                  className="highlight highlight-utkarsh"
                  variants={highlightVariants}
                  whileHover="hover"
                >
                  Utkarsh
                </motion.span>{" "}
                — a web developer passionate about creating clean, responsive, and intuitive websites.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                I'm currently in my final year of{" "}
                <motion.span
                  className="highlight highlight-btech"
                  variants={highlightVariants}
                  whileHover="hover"
                >
                  B.Tech
                </motion.span>{" "}
                at Arya Institute of Engineering & Technology.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                With multiple{" "}
                <motion.span
                  className="highlight highlight-internships"
                  variants={highlightVariants}
                  whileHover="hover"
                >
                  internships
                </motion.span>{" "}
                under my belt, I've worked on real-world projects that blend modern design with functional code — especially using{" "}
                <motion.span
                  className="highlight highlight-javascript"
                  variants={highlightVariants}
                  whileHover="hover"
                >
                  JavaScript
                </motion.span>,{" "}
                <motion.span
                  className="highlight highlight-react"
                  variants={highlightVariants}
                  whileHover="hover"
                >
                  React
                </motion.span>, and other web technologies.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                I believe in writing{" "}
                <motion.span
                  className="highlight highlight-cleancode"
                  variants={highlightVariants}
                  whileHover="hover"
                >
                  clean code
                </motion.span>, building smooth user experiences, and always learning what's next in tech.
              </p>
            </div>

            <style jsx>{`
              .highlight {
                position: relative;
                display: inline-block;
                padding: 0 0.2em;
                font-weight: 800; /* Extra bold */
                will-change: transform;
                /* Default text colors based on theme */
                color: #4b5563; /* text-gray-600 */
                transition: color 0.3s ease; /* Smooth text color transition */
              }

              .dark .highlight { 
                color: #d1d5db; /* text-gray-300 */ 
              }

              /* Specific text colors on hover (for light mode) - these were present in your Pop.jsx, but only change on hover. */
              .highlight-utkarsh:hover { color: #3b82f6; /* Blue */ }
              .highlight-btech:hover { color: #a78bfa; /* Purple */ }
              .highlight-internships:hover { color: #f97316; /* Orange */ }
              .highlight-javascript:hover { color: #fbbf24; /* Yellow */ }
              .highlight-react:hover { color: #ef4444; /* Red */ }
              .highlight-cleancode:hover { color: #22c55e; /* Green */ }

              /* Specific hover colors for text in dark mode for better contrast */
              .dark .highlight-utkarsh:hover { color: #60a5fa; /* Light blue */ }
              .dark .highlight-btech:hover { color: #c084fc; /* Light purple */ }
              .dark .highlight-internships:hover { color: #fb923c; /* Light orange */ }
              .dark .highlight-javascript:hover { color: #facc15; /* Light yellow */ }
              .dark .highlight-react:hover { color: #f87171; /* Light red */ }
              .dark .highlight-cleancode:hover { color: #4ade80; /* Light green */ }

              .highlight::after {
                content: '';
                position: absolute;
                bottom: 0.1em; /* From Pop.jsx */
                left: 0;
                width: 100%;
                height: 0.2em; /* From Pop.jsx */
                z-index: -1;
                border-radius: 4px;
                opacity: 0.3; /* Default opacity from Pop.jsx */
                transform: scaleX(1); /* Default state (no scaling on hover) */
                transition: opacity 0.3s ease; /* Smooth opacity transition */
              }

              .highlight:hover::after {
                opacity: 0.8; /* Fully opaque on hover from Pop.jsx */
              }

              /* Specific background colors for ::after */
              .highlight-utkarsh::after { background: #3b82f6; }
              .highlight-btech::after { background: #a78bfa; }
              .highlight-internships::after { background: #f97316; }
              .highlight-javascript::after { background: #fbbf24; }
              .highlight-react::after { background: #ef4444; }
              .highlight-cleancode::after { background: #22c55e; }

              /* Reduced motion accessibility */
              @media (prefers-reduced-motion: reduce) {
                .highlight,
                .highlight::after {
                  transition: none !important;
                }
              }
            `}</style>
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

          {/* Tech Stack Tags */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-12"
          >
            {/* <div className="flex flex-wrap justify-center gap-3">
            {['React', 'JavaScript', 'Node.js', 'Tailwind CSS', 'MongoDB', 'Express', 'Git', 'Figma'].map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.1 * index }}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
                className="px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full text-sm font-medium text-gray-700 dark:text-gray-300 border border-gray-200/50 dark:border-gray-700/50 shadow-sm hover:shadow-xl transition-all duration-500 ease-in-out hover:border-primary-400 dark:hover:border-primary-500"
              >
                {tech}
              </motion.span>
            ))}
          </div> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 