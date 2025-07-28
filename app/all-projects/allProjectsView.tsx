'use client'

import { useRouter } from 'next/navigation';

import { Header } from '@/components/header';
import { ProjectCard } from '@/components/projectCard';
import { Project } from '@/types/project';

export function AllProjectsView({ projects }: { projects: Project[] }) {
  const router = useRouter()

  function handleBackToHome() {
    router.push('/')
  }

  return (
    <main className='min-h-screen md:h-screen flex flex-col items-center'>
      <Header
        showLinks={ false }
        buttonText='Back To Home'
        onClick={ handleBackToHome }
      />
      <div className='flex flex-col text-center gap-2 mt-22'>
        <h1 className='text-5xl font-bold text-green'>
          All Projects
        </h1>
        <p className='text-gray font-semibold text-2xl'>
          Check all projects
        </p>
      </div>

      <section className='grid grid-cols-1 w-fit mt-12 md:w-full md:grid-cols-3 gap-3'>
        { projects.map(( project, index ) => (
          <ProjectCard
            key={ `project-${project.title}-${index}` }
            title={ project.title }
            description={ project.description }
            url={ project.url }
            src={ project.src }
            alt={ project.alt }
            tags={ project.tags }
          />
        ))}
      </section>
    </main>
  )
}