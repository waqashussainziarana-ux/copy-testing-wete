import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'donate';
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  ...props 
}) => {
  const baseStyles = "px-6 py-3 rounded-md font-medium transition-all duration-200 shadow-sm flex items-center justify-center gap-2";
  
  const variants = {
    primary: "bg-brand-darkBlue text-white hover:bg-slate-800",
    secondary: "bg-brand-teal text-white hover:bg-emerald-800",
    outline: "border-2 border-brand-darkBlue text-brand-darkBlue hover:bg-brand-darkBlue hover:text-white",
    donate: "bg-brand-darkBlue text-white hover:bg-blue-900 shadow-md transform hover:-translate-y-0.5"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`} 
      {...props}
    >
      {children}
    </button>
  );
};