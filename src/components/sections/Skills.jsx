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

const Skills = () => {
  const skills = [
    {
      name: 'HTML5',
      level: 'Advanced',
      icon: htmlIcon,
      category: 'Frontend'
    },
    {
      name: 'CSS3',
      level: 'Advanced',
      icon: cssIcon,
      category: 'Frontend'
    },
    {
      name: 'JavaScript',
      level: 'Advanced',
      icon: jsIcon,
      category: 'Frontend'
    },
    {
      name: 'React',
      level: 'Advanced',
      icon: reactIcon,
      category: 'Frontend'
    },
    {
      name: 'Node.js',
      level: 'Intermediate',
      icon: nodeIcon,
      category: 'Backend'
    },
    {
      name: 'Git',
      level: 'Intermediate',
      icon: gitIcon,
      category: 'Tools'
    },
    {
      name: 'Tailwind CSS',
      level: 'Advanced',
      icon: tailwindIcon,
      category: 'Frontend'
    },
    {
      name: 'MySQL',
      level: 'Intermediate',
      icon: mysqlIcon,
      category: 'Backend'
    },
    {
      name: 'Figma',
      level: 'Intermediate',
      icon: figmaIcon,
      category: 'Tools'
    },
    {
      name: 'Vite',
      level: 'Intermediate',
      icon: viteIcon,
      category: 'Tools'
    }
  ];

  // Group skills by category
  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {});

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Skill Set
          </h2>
          <div className="w-24 h-1 bg-primary-500 mx-auto rounded-full"></div>
        </div>

        {/* Skills Grid */}
        <div className="space-y-12">
          {Object.entries(groupedSkills).map(([category, categorySkills]) => (
            <div key={category}>
              <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-6">
                {category}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {categorySkills.map((skill) => (
                  <div
                    key={skill.name}
                    className="group relative bg-white dark:bg-gray-700 p-6 rounded-lg border border-gray-200 dark:border-gray-600 
                             transition-all duration-300 hover:scale-105 hover:shadow-md hover:border-primary-200 dark:hover:border-primary-800
                             flex flex-col items-center text-center"
                  >
                    <div className="mb-3 transition-transform duration-300 group-hover:scale-110">
                      <img
                        src={skill.icon}
                        alt={`${skill.name} icon`}
                        className="w-12 h-12 object-contain"
                        loading="lazy"
                      />
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                      {skill.name}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {skill.level}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 