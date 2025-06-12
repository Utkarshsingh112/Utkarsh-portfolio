import { motion } from 'framer-motion';
import { ArrowTopRightOnSquareIcon, CodeBracketIcon } from '@heroicons/react/24/outline';

const techGradients = {
  'React': 'from-blue-500 to-cyan-400',
  'Node.js': 'from-green-500 to-emerald-400',
  'MongoDB': 'from-green-600 to-green-400',
  'Express': 'from-gray-600 to-gray-400',
  'Tailwind CSS': 'from-cyan-500 to-blue-400',
  'Framer Motion': 'from-pink-500 to-rose-400',
  'Vite': 'from-purple-600 to-purple-400',
  // Add more technology gradients as needed
};

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
    >
      {/* Featured Badge */}
      {project.featured && (
        <div className="absolute top-4 right-4 z-10">
          <span className="px-3 py-1 bg-gradient-to-r from-primary-500 to-primary-400 text-white text-sm font-medium rounded-full shadow-lg">
            Featured
          </span>
        </div>
      )}

      {/* Image Container */}
      <div className="relative aspect-video overflow-hidden">
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
          whileHover={{ scale: 1.1 }}
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Quick Links */}
        <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <motion.a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white/90 dark:bg-gray-800/90 rounded-full shadow-lg hover:bg-white dark:hover:bg-gray-800 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowTopRightOnSquareIcon className="w-6 h-6 text-gray-900 dark:text-white" />
          </motion.a>
          <motion.a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white/90 dark:bg-gray-800/90 rounded-full shadow-lg hover:bg-white dark:hover:bg-gray-800 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <CodeBracketIcon className="w-6 h-6 text-gray-900 dark:text-white" />
          </motion.a>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.map(tech => (
            <span
              key={tech}
              className={`px-3 py-1 text-sm font-medium rounded-full bg-gradient-to-r ${
                techGradients[tech] || 'from-gray-500 to-gray-400'
              } bg-clip-text text-transparent border border-current/20`}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard; 