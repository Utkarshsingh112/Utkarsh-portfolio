import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectCard from './ProjectCard';

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce platform with real-time inventory management, user authentication, and payment processing.',
    image: '/projects/ecommerce.jpg',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Redux'],
    liveLink: 'https://ecommerce-demo.com',
    githubLink: 'https://github.com/username/ecommerce',
    featured: true,
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates, drag-and-drop interface, and team collaboration features.',
    image: '/projects/taskmanager.jpg',
    technologies: ['React', 'Firebase', 'Tailwind CSS', 'Framer Motion'],
    liveLink: 'https://taskmanager-demo.com',
    githubLink: 'https://github.com/username/taskmanager',
    featured: true,
  },
  {
    id: 3,
    title: 'Portfolio Website',
    description: 'A modern portfolio website showcasing projects and skills with smooth animations and responsive design.',
    image: '/projects/portfolio.jpg',
    technologies: ['React', 'Tailwind CSS', 'Framer Motion', 'Vite'],
    liveLink: 'https://portfolio-demo.com',
    githubLink: 'https://github.com/username/portfolio',
    featured: false,
  },
  // Add more projects as needed
];

// Get unique technologies for filter
const allTechnologies = [...new Set(projects.flatMap(project => project.technologies))];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
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