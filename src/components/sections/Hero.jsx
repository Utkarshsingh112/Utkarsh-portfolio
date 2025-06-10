import Button from '../ui/Button';

const Hero = () => {
  const expertise = [
    'Full Stack Development',
    'React & Node.js',
    'UI/UX Design',
    'Responsive Web Applications',
    'Database Management',
    'API Development'
  ];

  return (
    <section className="min-h-screen flex items-center justify-center py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="text-left">
              {/* Greeting and Name */}
              <div className="mb-8">
                <span className="text-2xl md:text-3xl text-primary-600 dark:text-primary-400 mb-4 block">
                  👋 Hello, I'm
                </span>
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
                  Utkarsh Singh
                </h1>
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300 mb-6">
                  Full Stack Developer | Building Scalable Web Applications
                </h2>
              </div>

              {/* Introduction */}
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8">
                I'm a passionate Full Stack Developer focused on creating elegant, efficient, and user-friendly web applications. 
                With expertise in modern web technologies, I help businesses transform their ideas into powerful digital solutions.
              </p>

              {/* Expertise Areas */}
              <div className="flex flex-wrap gap-3 mb-12">
                {expertise.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Call to Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
                  className="w-full sm:w-auto"
                >
                  View My Work
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                  className="w-full sm:w-auto"
                >
                  Contact Me
                </Button>
                <Button
                  variant="ghost"
                  size="lg"
                  as="a"
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto"
                >
                  Download Resume
                </Button>
              </div>
            </div>

            {/* Right Column - Photo */}
            <div className="relative">
              {/* Photo Container */}
              <div className="relative w-full aspect-square max-w-md mx-auto">
                {/* Decorative Elements */}
                <div className="absolute -inset-4 bg-primary-100 dark:bg-primary-900/20 rounded-2xl transform rotate-3"></div>
                <div className="absolute -inset-4 bg-primary-200 dark:bg-primary-800/20 rounded-2xl transform -rotate-3"></div>
                
                {/* Photo */}
                <div className="relative w-full h-full rounded-2xl overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl">
                  {/* Replace src with your actual photo path */}
                  <img
                    src="/src/assets/IMG20240318173046.jpg"
                    alt="Utkarsh Singh"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Decorative Dots */}
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-dots-pattern opacity-10"></div>
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-dots-pattern opacity-10"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 