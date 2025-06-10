import Card from '../ui/Card';
import Button from '../ui/Button';

const Projects = () => {
  const projects = [
    {
      title: 'Project 1',
      description: 'A brief description of project 1',
      image: '/placeholder.jpg',
      technologies: ['React', 'Node.js', 'MongoDB'],
      liveLink: '#',
      githubLink: '#',
    },
    {
      title: 'Project 2',
      description: 'A brief description of project 2',
      image: '/placeholder.jpg',
      technologies: ['React', 'Firebase', 'Tailwind'],
      liveLink: '#',
      githubLink: '#',
    },
    {
      title: 'Project 3',
      description: 'A brief description of project 3',
      image: '/placeholder.jpg',
      technologies: ['React', 'Express', 'PostgreSQL'],
      liveLink: '#',
      githubLink: '#',
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card
              key={project.title}
              variant="elevated"
              hover
              className="flex flex-col h-full"
            >
              <div className="aspect-w-16 aspect-h-9 bg-gray-200 dark:bg-gray-600 rounded-t-lg">
                {/* Add actual image here */}
                <div className="w-full h-48 bg-gray-200 dark:bg-gray-600" />
              </div>
              <Card.Content className="flex-1">
                <Card.Title>{project.title}</Card.Title>
                <Card.Description className="mb-4">
                  {project.description}
                </Card.Description>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </Card.Content>
              <Card.Footer>
                <div className="flex gap-4">
                  <Button
                    variant="ghost"
                    size="sm"
                    as="a"
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    as="a"
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </Button>
                </div>
              </Card.Footer>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 