import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectCard from './ProjectCard';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';

const projects = [
  {
    id: 1,
    title: 'LMS-AI',
    description: 'A dynamic learning management system powered by AI. Features include personalized learning paths, real-time feedback, and seamless integration with existing tools. Built with React and Tailwind CSS, it demonstrates modern web development practices and responsive design principles.',
    image: '/projects/lms-ai.png',
    technologies: ['Next.js', 'Tailwind CSS', 'Supabase', 'Clerk','Vapi'],
    liveLink: 'https://lms-ai-ten.vercel.app/',
    githubLink: 'https://github.com/utkarshsingh112/lms-ai',
    featured: true,
  },
  {
    id: 2,
    title: 'ReWear',
    description: 'ReWear – Community Clothing Exchange is a sustainable platform where people swap clothes using a points-based system..',
    image: '/projects/Screenshot 2025-09-30 120549.png',
    technologies: ['React', 'Firebase', 'Tailwind CSS', 'Framer Motion'],
    liveLink: 'https://rewear-community-clothing-exchange.vercel.app/',
    githubLink: 'https://github.com/Utkarshsingh112/ReWear-Community-Clothing-Exchange',
    featured: true,
  },
  {
    id: 3,
    title: 'CodeCollab',
    description: 'A real-time code collaboration platform for developers. Features include live code editing, syntax highlighting, and chat functionality. This project demonstrates my expertise in WebSocket implementation and real-time data synchronization.',
    image: '/projects/codecollab.jpg',
    technologies: ['React', 'Node.js', 'Socket.io', 'Monaco Editor'],
    liveLink: 'https://codecollab-demo.vercel.app',
    githubLink: 'https://github.com/utkarshsingh/codecollab',
    featured: true,
  },
  {
    id: 4,
    title: 'WeatherWise',
    description: 'A weather application with a focus on user experience and performance. Features include location-based forecasts, interactive maps, and detailed weather analytics. Built with a focus on API integration and data visualization.',
    image: '/projects/weatherwise.jpg',
    technologies: ['React', 'OpenWeather API', 'Chart.js', 'Tailwind CSS'],
    liveLink: 'https://weatherwise-app.vercel.app',
    githubLink: 'https://github.com/utkarshsingh/weatherwise',
    featured: false,
  }
];

// Get unique technologies for filter
const allTechnologies = [...new Set(projects.flatMap(project => project.technologies))];

const Projects = () => {
  const [showAll, setShowAll] = useState(false);

  // Separate featured and non-featured projects
  const { featuredProjects, otherProjects } = useMemo(() => {
    return {
      featuredProjects: projects.filter(project => project.featured),
      otherProjects: projects.filter(project => !project.featured)
    };
  }, []);

  // Compute list to display based on toggle
  const displayedProjects = useMemo(() => {
    return showAll ? [...featuredProjects, ...otherProjects] : featuredProjects;
  }, [showAll, featuredProjects, otherProjects]);

  // Toggle show all projects
  const toggleShowAll = () => {
    setShowAll(prev => !prev);
  };

  return (
    <section id="projects" className="relative py-12 rounded-3xl mx-4 my-2 overflow-hidden">
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] dark:opacity-[0.05]" />
      </div>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My Projects
          </h2>
          <div className="w-24 h-1 mx-auto bg-primary-500 dark:bg-primary-400 rounded-full mb-4" />
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here are some of my recent projects. Each project is a unique piece of development, showcasing different skills and technologies.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedProjects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          {otherProjects.length > 0 && (
            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <button
                onClick={toggleShowAll}
                className="group flex items-center gap-2 px-6 py-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl border border-gray-200 dark:border-gray-700 transition-all duration-300"
              >
                <span className="text-gray-700 dark:text-gray-300 font-medium">
                  {showAll ? 'Show Less' : 'Show More'}
                </span>
                {showAll ? (
                  <ChevronUpIcon className="w-5 h-5 text-gray-600 dark:text-gray-400 group-hover:text-primary-500 dark:group-hover:text-primary-400 transition-colors" />
                ) : (
                  <ChevronDownIcon className="w-5 h-5 text-gray-600 dark:text-gray-400 group-hover:text-primary-500 dark:group-hover:text-primary-400 transition-colors" />
                )}
              </button>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 