import React from 'react';

export default function Badge({
  children,
  variant = 'default',
  size = 'md',
  className = ''
}) {
  const baseStyles = 'inline-flex items-center font-medium rounded-md transition-colors';

  const sizeStyles = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-2.5 py-1 text-xs sm:text-sm',
    lg: 'px-3 py-1.5 text-sm'
  };

  const variantStyles = {
    default: 'bg-slate-800/80 text-slate-300 border border-slate-700/60 hover:border-slate-600',
    primary: 'bg-indigo-500/10 text-indigo-300 border border-indigo-500/25 hover:bg-indigo-500/20',
    emerald: 'bg-emerald-500/10 text-emerald-300 border border-emerald-500/25',
    cyan: 'bg-cyan-500/10 text-cyan-300 border border-cyan-500/25',
    amber: 'bg-amber-500/10 text-amber-300 border border-amber-500/25',
    purple: 'bg-purple-500/10 text-purple-300 border border-purple-500/25'
  };

  return (
    <span
      className={`${baseStyles} ${sizeStyles[size] || sizeStyles.md} ${
        variantStyles[variant] || variantStyles.default
      } ${className}`}
    >
      {children}
    </span>
  );
}
