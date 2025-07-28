'use client'

import { useRouter } from 'next/navigation';

import { Button } from '@/components/button';

export default function NotFound() {
  const router = useRouter()

  function handleNavigate() {
    router.push('/')
  }

  return (
    <main className='h-screen flex flex-col items-center justify-center text-center gap-12' >
      <div>
        <h1 className='text-5xl text-green font-bold' >
          404 Not Found
        </h1>
        <p className='text-xl' >
          Looks like you are lost, this page probably was removed or not exists. Please try again later
        </p>
      </div>
      <Button onClick={ handleNavigate } className='w-fit' >
        Back to Home
      </Button>
    </main>
  )
}