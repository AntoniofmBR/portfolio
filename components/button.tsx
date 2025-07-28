'use client'

import React from 'react'
import { motion, type HTMLMotionProps } from 'framer-motion'

// interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
//   variant?: 'primary' | 'outline' | 'destructive'
//   size?: 'sm' | 'md' | 'lg'
// }
interface ButtonProps extends HTMLMotionProps<'button'> {
  variant?: 'primary' | 'outline' | 'destructive'
  size?: 'sm' | 'md' | 'lg'
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  className,
  ...props
}: ButtonProps) {
  const baseStyle = 'rounded-lg font-medium px-3 py-2'

  const variants = {
    primary: 'bg-green text-foreground font-semibold',
    outline: 'border border-green text-foreground',
    destructive: 'bg-red hover:bg-red-hover',
  }

  const sizes = {
    sm: 'px-2 py-1 text-sm',
    md: 'px-6 py-2',
    lg: 'px-8 py-3 text-lg',
  }

  return (
    <motion.button
      whileHover={{ scale: 1.05, background: 'var(--green-hover)' }}
      className={`${ baseStyle } ${ variants[variant] } ${ sizes[size] } ${ className }`}
      { ...props }
    >
      { children }
    </motion.button>
  )
}

