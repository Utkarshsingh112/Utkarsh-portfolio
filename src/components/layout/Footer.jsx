const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-transparent border-t border-gray-200/50 dark:border-gray-800/50">
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] dark:opacity-[0.05]" />
      </div>
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-center">
          <div className="text-gray-600 dark:text-gray-400">
            © {currentYear} Utkarsh Singh.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 