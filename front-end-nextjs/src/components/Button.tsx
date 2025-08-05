import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger';
  size?: 'sm' | 'md' | 'lg';
}

export default function Button({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  ...props 
}: ButtonProps) {
  const baseClasses = 'font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-sm hover:shadow-md';
  
  const variantClasses = {
    primary: 'bg-slate-800 hover:bg-slate-700 text-white focus:ring-slate-500 border-2 border-slate-800 hover:border-slate-700',
    secondary: 'bg-white hover:bg-gray-50 text-slate-800 focus:ring-slate-500 border-2 border-slate-300 hover:border-slate-400',
    danger: 'bg-red-600 hover:bg-red-700 text-white focus:ring-red-500 border-2 border-red-600 hover:border-red-700',
  };
  
  const sizeClasses = {
    sm: 'px-2 sm:px-3 py-1 sm:py-1.5 text-xs sm:text-sm',
    md: 'px-4 sm:px-6 py-2 sm:py-2.5 text-sm sm:text-base',
    lg: 'px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg',
  };

  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  return (
    <button
      className={combinedClasses}
      {...props}
    >
      {children}
    </button>
  );
}
