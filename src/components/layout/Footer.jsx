const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-center">
          <div className="text-gray-600 dark:text-gray-400">
            © {currentYear} Utkarsh Singh. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 