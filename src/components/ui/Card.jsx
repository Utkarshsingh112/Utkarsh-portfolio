const Card = ({
  children,
  className = '',
  variant = 'default',
  hover = false,
  padding = true,
  ...props
}) => {
  const variants = {
    default: 'bg-white dark:bg-gray-700',
    elevated: 'bg-white dark:bg-gray-700 shadow-lg',
    bordered: 'bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600',
    ghost: 'bg-transparent',
  };

  return (
    <div
      className={`
        rounded-lg
        ${variants[variant]}
        ${padding ? 'p-6' : ''}
        ${hover ? 'transition-shadow duration-200 hover:shadow-md' : ''}
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  );
};

// Card Header component
Card.Header = ({ children, className = '', ...props }) => (
  <div className={`mb-4 ${className}`} {...props}>
    {children}
  </div>
);

// Card Title component
Card.Title = ({ children, className = '', ...props }) => (
  <h3
    className={`text-xl font-semibold text-gray-900 dark:text-white ${className}`}
    {...props}
  >
    {children}
  </h3>
);

// Card Description component
Card.Description = ({ children, className = '', ...props }) => (
  <p
    className={`text-gray-600 dark:text-gray-300 ${className}`}
    {...props}
  >
    {children}
  </p>
);

// Card Content component
Card.Content = ({ children, className = '', ...props }) => (
  <div className={className} {...props}>
    {children}
  </div>
);

// Card Footer component
Card.Footer = ({ children, className = '', ...props }) => (
  <div className={`mt-4 pt-4 border-t border-gray-200 dark:border-gray-600 ${className}`} {...props}>
    {children}
  </div>
);

export default Card; 