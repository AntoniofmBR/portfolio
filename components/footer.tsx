'use client'

import Image from 'next/image';
import { GithubLogo, InstagramLogo, LinkedinLogo } from 'phosphor-react';

import logo from '@/public/logo.png'

export function Footer() {
  function handleNavigateToLink( link: string ) {
    window.open(link, '_blank', 'noopener,noreferrer')
  }

  return (
    <footer className='w-full h-fit py-7 flex flex-col items-center justify-between gap-4' >
      <div className='w-full flex justify-between items-center'>
        <Image
          src={ logo }
          alt='Logo'
          height={ 100 }
          width={ 100 }
        />

        <div className='flex items-center justify-center gap-3' >
          <GithubLogo
            className='hover:scale-105 transition-all'
            size={ 32 }
            weight='fill'
            onClick={ () => handleNavigateToLink('https://github.com/AntoniofmBR') }
          />
        </div>
      </div>

      <span className='w-full bg-white rounded-full h-0.5' />

      <div className='flex w-full items-center justify-center gap-7' >
        <p className='text-xs md:text-lg' >
          © 2025 All rights reserved.
        </p>
        <p className='text-xs md:text-lg' >
          Made by Antoniofm 
        </p>
      </div>

    </footer>
  )
}