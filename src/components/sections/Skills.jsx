const Skills = () => {
  const skills = [
    { name: 'HTML', level: 'Advanced' },
    { name: 'CSS', level: 'Advanced' },
    { name: 'JavaScript', level: 'Advanced' },
    { name: 'React', level: 'Intermediate' },
    { name: 'Node.js', level: 'Intermediate' },
    { name: 'Git', level: 'Intermediate' },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Skills
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {skill.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">{skill.level}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 