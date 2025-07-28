'use client'

import Image from 'next/image';

import illustration from '@/public/conversation.png'
import { ButtonSendMessage } from '@/components/sendMessageButton';

export function ContactSection({ id }: { id: string }) {
  return (
    <nav id={ id } className='min-h-screen w-full flex flex-col justify-center items-center md:flex-row md:justify-between gap-12' >
      <div className='flex flex-col gap-5 text-center md:text-left' >
        <h1 className='text-5xl font-bold' >
          Let&apos;s Talk!
        </h1>
        <p className='text-gray font-semibold text-2xl' >
          Get in touch to develop incredible projects and boost your business.
        </p>
        <ButtonSendMessage
          className='w-auto md:w-[30%] text-lg mb-28'
          variant='outline'
        />
      </div>

      <Image
        src={ illustration }
        alt='Placeholder'
        className='w-auto h-auto md:w-[30%] md:h-[70%] md:mb-48'
      />
    </nav>
  )
}
