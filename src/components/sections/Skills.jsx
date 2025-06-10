import { useState } from "react";
import { motion } from "framer-motion";
// Import skill icons
import htmlIcon from '../../assets/icons8-html-5.svg';
import cssIcon from '../../assets/icons8-css-logo.svg';
import jsIcon from '../../assets/icons8-javascript.svg';
import reactIcon from '../../assets/react-svgrepo-com.svg';
import nodeIcon from '../../assets/icons8-nodejs.svg';
import gitIcon from '../../assets/icons8-github.svg';
import tailwindIcon from '../../assets/icons8-tailwindcss.svg';
import mysqlIcon from '../../assets/icons8-mysql.svg';
import figmaIcon from '../../assets/icons8-figma.svg';
import viteIcon from '../../assets/vite.svg';

const categories = ["Frontend", "Backend", "Tools"];

const skills = [
  { name: "HTML5", icon: htmlIcon, level: 5, category: "Frontend" },
  { name: "CSS3", icon: cssIcon, level: 5, category: "Frontend" },
  { name: "JavaScript", icon: jsIcon, level: 5, category: "Frontend" },
  { name: "React", icon: reactIcon, level: 5, category: "Frontend" },
  { name: "Tailwind CSS", icon: tailwindIcon, level: 4, category: "Frontend" },
  { name: "Node.js", icon: nodeIcon, level: 4, category: "Backend" },
  { name: "MySQL", icon: mysqlIcon, level: 3, category: "Backend" },
  { name: "Git", icon: gitIcon, level: 4, category: "Tools" },
  { name: "Figma", icon: figmaIcon, level: 3, category: "Tools" },
  { name: "Vite", icon: viteIcon, level: 3, category: "Tools" },
];

const skillLevels = ["Beginner", "Intermediate", "Advanced", "Expert", "Master"];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("Frontend");

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-50/80 via-white/60 to-primary-50/80 dark:from-gray-900 dark:via-gray-800 dark:to-primary-950 transition-colors">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-2">
            Skill Set
          </h2>
          <div className="w-24 h-1 mx-auto bg-primary-500 dark:bg-primary-400 rounded-full mb-4" />
          <p className="text-gray-500 dark:text-gray-400 text-lg">
            My core technologies and tools
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center gap-4 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full font-semibold transition-all duration-200
                ${activeCategory === cat
                  ? "bg-primary-600 text-white shadow-lg dark:bg-primary-400 dark:text-gray-900"
                  : "bg-white/10 border border-white/20 text-primary-600 dark:text-primary-300 dark:bg-gray-800/40 hover:bg-primary-100 dark:hover:bg-primary-900/30"
                }`}
              aria-pressed={activeCategory === cat}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08 } }
          }}
        >
          {skills
            .filter((s) => s.category === activeCategory)
            .map((skill, idx) => (
              <motion.div
                key={skill.name}
                className="group relative rounded-2xl border border-white/20 bg-white/10 dark:bg-gray-800/40 backdrop-blur-md p-8 flex flex-col items-center shadow-lg transition-all duration-300 hover:shadow-2xl hover:border-primary-400"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: idx * 0.05, type: "spring" }}
                tabIndex={0}
                aria-label={skill.name}
                title={skill.name}
              >
                {/* Icon */}
                <motion.img
                  src={skill.icon}
                  alt={`${skill.name} icon`}
                  className="w-14 h-14 mb-4 grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-300"
                  whileHover={{ scale: 1.15, filter: "drop-shadow(0 0 8px #0ea5e9)" }}
                  whileFocus={{ scale: 1.15, filter: "drop-shadow(0 0 8px #0ea5e9)" }}
                />
                {/* Name */}
                <span className="text-lg font-bold text-gray-900 dark:text-white mb-1 text-center">
                  {skill.name}
                </span>
                {/* Proficiency */}
                <span className="text-sm text-gray-500 dark:text-gray-300 mb-2">
                  {skillLevels[skill.level - 1]}
                </span>
                {/* Proficiency Dots */}
                <div className="flex gap-1 justify-center mt-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <span
                      key={i}
                      className={`inline-block w-2 h-2 rounded-full transition-all duration-200
                        ${i <= skill.level
                          ? "bg-primary-500 dark:bg-primary-300"
                          : "bg-gray-300 dark:bg-gray-700"
                        }`}
                    />
                  ))}
                </div>
              </motion.div>
            ))}
        </motion.div>
      </div>
    </section>
  );
} 