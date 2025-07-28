'use client'

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

import { Button } from '@/components/button';

export function HomeSection({ id }: { id: string }) {
  const router = useRouter()

  function handleGoToAllProjects() {
    router.push('/all-projects')
  }

  return (
    <nav id={ id } className='min-h-screen md:h-screen w-full flex flex-col justify-center mt-12 text-center gap-4 md:text-left md:flex-row md:mt-0 md:justify-between items-center md:gap-12' >
      <div className='flex flex-col items-center md:items-start gap-2 w-fit' >
        <h1 className='text-3xl md:text-5xl font-bold' >
          Hello, I&apos;m <span className='text-green' > Antonio Fonseca </span> <br /> a Web Developer
        </h1>
        <p className='text-gray font-semibold text-2xl' >
          Building your success with code
        </p>
        <Button className='w-fit text-lg mb-28' onClick={ handleGoToAllProjects } >
          Explore Projects
        </Button>
      </div>

      <motion.img
        whileHover={{ scale: 1.05 }}
        src='https://github.com/AntoniofmBR.png'
        alt='Placeholder'
        className='w-fit md:h-[60%] rounded-lg'
      />
    </nav>
  )
}