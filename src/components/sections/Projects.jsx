import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectCard from './ProjectCard';

const projects = [
  {
    id: 1,
    title: 'Portfolio Builder',
    description: 'A dynamic portfolio builder that helps developers showcase their work. Features include real-time preview, custom themes, and seamless deployment. Built with React and Tailwind CSS, it demonstrates modern web development practices and responsive design principles.',
    image: '/projects/portfolio-builder.jpg',
    technologies: ['React', 'Tailwind CSS', 'Framer Motion', 'Vite'],
    liveLink: 'https://portfolio-builder-demo.vercel.app',
    githubLink: 'https://github.com/utkarshsingh/portfolio-builder',
    featured: true,
  },
  {
    id: 2,
    title: 'TaskFlow',
    description: 'A minimalist task management app with a focus on user experience. Implemented drag-and-drop functionality, real-time updates, and a clean, intuitive interface. The project showcases my ability to create efficient, user-friendly applications with modern web technologies.',
    image: '/projects/taskflow.jpg',
    technologies: ['React', 'Firebase', 'Tailwind CSS', 'Framer Motion'],
    liveLink: 'https://taskflow-app.vercel.app',
    githubLink: 'https://github.com/utkarshsingh/taskflow',
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
  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-[#f5f5f5] via-[#ffffff] to-[#eaeaea] dark:from-[#0d0d0d] dark:via-[#121212] dark:to-[#1a1a1a]">
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 