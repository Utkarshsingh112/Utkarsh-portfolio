import { useTheme } from '../../context/ThemeContext';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative w-14 h-7 rounded-full bg-gray-200 dark:bg-gray-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
      aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
    >
      {/* Icons Container */}
      <div className="absolute inset-0 flex items-center justify-between px-1.5">
        <SunIcon className="w-4 h-4 text-yellow-500" />
        <MoonIcon className="w-4 h-4 text-gray-600 dark:text-gray-300" />
      </div>

      {/* Sliding Circle */}
      <div
        className={`absolute top-0.5 left-0.5 w-6 h-6 rounded-full bg-white dark:bg-gray-900 shadow-lg transform transition-transform duration-300 ease-in-out ${
          isDarkMode ? 'translate-x-7' : 'translate-x-0'
        }`}
      >
        {/* Inner Circle Gradient */}
        <div className="absolute inset-0.5 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900" />
      </div>
    </button>
  );
};

export default ThemeToggle; 