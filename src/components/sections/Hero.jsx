import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';
import profileImage from '../../assets/IMG20240318173046.jpg';
import { ArrowDownIcon, CodeBracketIcon, CommandLineIcon, PaintBrushIcon, ServerIcon, WrenchScrewdriverIcon, DocumentArrowDownIcon } from '@heroicons/react/24/outline';

const expertise = [
  { 
    text: 'React & Next.js Development',
    icon: CodeBracketIcon,
    color: 'text-blue-500 dark:text-blue-400'
  },
  { 
    text: 'Modern UI/UX Design',
    icon: PaintBrushIcon,
    color: 'text-purple-500 dark:text-purple-400'
  },
  { 
    text: 'RESTful APIs & Backend',
    icon: ServerIcon,
    color: 'text-orange-500 dark:text-orange-400'
  },
  { 
    text: 'Database Architecture',
    icon: WrenchScrewdriverIcon,
    color: 'text-red-500 dark:text-red-400'
  },
  { 
    text: 'Performance Optimization',
    icon: CommandLineIcon,
    color: 'text-green-500 dark:text-green-400'
  }
];

const roles = [
  "React Developer",
  "UI/UX Designer",
  "Backend Engineer",
  "Problem Solver"
];

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [displayText, setDisplayText] = useState('');

  // Typing effect for role
  useEffect(() => {
    let timeout;
    if (isTyping) {
      if (displayText.length < roles[currentRole].length) {
        timeout = setTimeout(() => {
          setDisplayText(roles[currentRole].slice(0, displayText.length + 1));
        }, 100);
      } else {
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, 2000);
      }
    } else {
      if (displayText.length === 0) {
        setCurrentRole((prev) => (prev + 1) % roles.length);
        setIsTyping(true);
      } else {
        timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 50);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayText, isTyping, currentRole]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center py-20 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 -z-10">
        {/* Gradient Blobs */}
        {/* <div className="absolute top-1/4 -left-4 w-72 h-72 bg-primary-300/30 dark:bg-primary-600/20 rounded-full mix-blend-multiply filter blur-xl animate-blob" />
        <div className="absolute top-1/3 -right-4 w-72 h-72 bg-purple-300/30 dark:bg-purple-600/20 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300/30 dark:bg-pink-600/20 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000" /> */}
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] dark:opacity-[0.05]" />
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <motion.div 
              className="text-left"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Greeting and Name */}
              <motion.div 
                className="mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <span className="text-2xl md:text-3xl text-primary-600 dark:text-primary-400 mb-4 block">
                  👋 Hello, I'm
                </span>
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
                  Utkarsh Singh
                </h1>
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300 mb-6 min-h-[2.5rem]">
                  <span className="inline-block bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent typing-cursor">
                    {displayText}
                  </span>
                </h2>
              </motion.div>

              {/* Introduction */}
              <motion.p 
                className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                I'm a passionate developer who loves crafting beautiful, performant web applications. 
                With a keen eye for design and a focus on user experience, I specialize in building 
                modern React applications that are both powerful and delightful to use. When I'm not 
                coding, you'll find me exploring new technologies or contributing to open-source projects.
              </motion.p>

              {/* Expertise Badges */}
              <motion.div 
                className="flex flex-wrap gap-3 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                {expertise.map((item, index) => (
                  <motion.div
                    key={item.text}
                    className="group flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 shadow-sm hover:shadow-md transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 * index }}
                  >
                    <item.icon className={`w-5 h-5 ${item.color}`} />
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{item.text}</span>
                  </motion.div>
                ))}
              </motion.div>

              {/* CTA Buttons */}
              <motion.div 
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <Button 
                  variant="primary" 
                  size="lg" 
                  className="group"
                  onClick={() => scrollToSection('projects')}
                >
                  View My Work
                  <ArrowDownIcon className="w-5 h-5 ml-2 transform group-hover:translate-y-1 transition-transform" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={() => scrollToSection('contact')}
                >
                  Contact Me
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="group"
                  as="a"
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Resume
                  <DocumentArrowDownIcon className="w-5 h-5 ml-2 transform group-hover:translate-y-1 transition-transform" />
                </Button>
              </motion.div>
            </motion.div>

            {/* Right Column - Photo */}
            <motion.div 
              className="relative"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {/* Photo Container */}
              <div className="relative w-full aspect-square max-w-md mx-auto group">
                {/* Decorative Elements */}
                <motion.div 
                  className="absolute -inset-4 bg-primary-100 dark:bg-primary-900/20 rounded-2xl"
                  animate={{ rotate: [0, 3, 0, -3, 0] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div 
                  className="absolute -inset-4 bg-primary-200 dark:bg-primary-800/20 rounded-2xl"
                  animate={{ rotate: [0, -3, 0, 3, 0] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                />
                
                {/* Photo */}
                <div className="relative w-full h-full rounded-2xl overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl transform transition-transform duration-500 group-hover:scale-[1.02]">
                  <img
                    src={profileImage}
                    alt="Utkarsh Singh"
                    className="w-full h-full object-cover"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Decorative Dots */}
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-dots-pattern opacity-10 animate-pulse" />
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-dots-pattern opacity-10 animate-pulse animation-delay-2000" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.5, 
          delay: 1,
          repeat: Infinity,
          repeatType: "reverse",
          repeatDelay: 0.5
        }}
        onClick={() => scrollToSection('skills')}
      >
        <ArrowDownIcon className="w-8 h-8 text-gray-400 dark:text-gray-600 hover:text-primary-500 dark:hover:text-primary-400 transition-colors" />
      </motion.div>
    </section>
  );
};

export default Hero; 