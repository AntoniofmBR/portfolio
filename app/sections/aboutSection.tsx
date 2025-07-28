'use client'

import Image from 'next/image';
import { CodeSimple, Brain ,Lightning } from 'phosphor-react'

import img from '@/public/about.png'

export function AboutSection({ id }: { id: string }) {
  return (
    <nav id={ id } className='min-h-screen w-full flex flex-col-reverse text-center md:text-left md:flex-row justify-between items-center gap-12 py-12' >
      <Image
        src={ img }
        alt='Placeholder'
        className='w-full h-auto md:h-[90%]'
      />
      <section className='flex flex-col items-center justify-center gap-12 h-[90%]' >
        <div className='flex flex-col gap-2 justify-center' >
          <h3 className='text-4xl text-green font-bold' >
            About Me
          </h3>
          <p>
            My name is Antonio, and I specialize in developing high-quality, scalable, and intuitive web applications that solve real-world problems and impact people&apos;s lives in meaningful ways. My goal is to help you boost your business with a complete and functional system that helps you with your day-to-day activities.
          </p>
        </div>

        <div className='flex flex-col gap-2 justify-center' >
          <h3 className='text-4xl text-green font-bold' >
            Skills
          </h3>
          <p>
            My expertises are programming and coding, also have some knowledge in Web Design with focus in create unique experiences for the users. The main technologies that I master are Next, React, Node and Prisma but I also know another technologies. With my abilities I will help you to achievement your goals, its not just code its your business reaching in another level.
          </p>
          <ul className='flex flex-col md:flex-row items-center justify-between mt-5' >
            <li className='flex flex-col md:flex-row items-center justify-center gap-3' >
              <CodeSimple size={ 40 } weight='bold' className='text-green' />
              <div className='flex flex-col gap-1 font-semibold' >
                <p className='text-yellow text-sm'> 5+ Core Technologies </p>
                <p className='text-white text-sm mb-6 md:mb-0'> React, Next.js, Node.js, PostgreSQL, etc. </p>
              </div>
            </li>
            <li className='flex flex-col md:flex-row items-center justify-center gap-3' >
              <Brain size={ 40 } weight='fill' className='text-green' />
              <div className='flex flex-col gap-1' >
                <p className='text-yellow text-sm'> 1+ Year Experience </p>
                <p className='text-white text-sm mb-6 md:mb-0'> With considerable experience in the market </p>
              </div>
            </li>
            <li className='flex flex-col md:flex-row items-center justify-center gap-3' >
              <Lightning size={ 40 } weight='fill' className='text-green' />
              <div className='flex flex-col gap-1' >
                <p className='text-yellow text-sm'> Fast & Scalable Systems </p>
                <p className='text-white text-sm mb-6 md:mb-0'> Highlight that your systems are optimized and production-ready </p>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </nav>
  )
}