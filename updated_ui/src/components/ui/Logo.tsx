
import React from 'react';
import { Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

interface LogoProps {
  variant?: 'default' | 'white';
  size?: 'sm' | 'md' | 'lg';
}

const Logo: React.FC<LogoProps> = ({ 
  variant = 'default',
  size = 'md'
}) => {
  const sizeClasses = {
    sm: 'text-xl',
    md: 'text-2xl',
    lg: 'text-3xl'
  };
  
  const variantClasses = {
    default: 'text-gray-900 dark:text-white',
    white: 'text-white'
  };
  
  return (
    <Link 
      to="/" 
      className={`font-bold flex items-center group ${sizeClasses[size]} ${variantClasses[variant]}`}
    >
      <Sparkles className="mr-2 text-eva-blue group-hover:animate-float" size={size === 'sm' ? 20 : size === 'md' ? 24 : 30} />
      <span>EVA</span>
      <span className="ml-2 text-gradient font-light">AI</span>
    </Link>
  );
};

export default Logo;
