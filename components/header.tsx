'use client'

import Image from 'next/image';
import type { ReactNode } from 'react';
import { motion } from 'framer-motion';

import { Button } from '@/components/button'

import logo from '@/public/logo.png'

interface HeaderProps {
  showLinks?: boolean
  onClick?: () => void
  newItem?: ReactNode
  buttonText?: string
}

export function Header({ showLinks = true, onClick, newItem, buttonText }: HeaderProps ) {
  return (
    <header className='fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur w-full flex px-14 py-7 justify-between items-center' >
      <Image
        src={ logo }
        alt='Logo'
        height={ 100 }
        width={ 125 }
      />

      { showLinks && (
        <div className='hidden md:flex justify-center items-center gap-4 decoration-none text-lg font-semibold' >
          <motion.a
            whileHover={{ scale: 1.05, color: 'var(--green)' }}
            href='#home'
            className='text-white'
          >
            Home
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05, color: 'var(--green)' }}
            href='#about'
            className='text-white'
          >
            About
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05, color: 'var(--green)' }}
            href='#projects'
            className='text-white'
          >
            Projects
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05, color: 'var(--green)' }}
            href='#contact'
            className='text-white'
          >
            Contact
          </motion.a>
        </div>
      ) }

      { buttonText && (
        <Button className='hidden md:flex' onClick={ onClick } >
          { buttonText }
        </Button>
      ) }
      { newItem }
    </header>
  )
}