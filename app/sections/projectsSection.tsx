'use client'

import { useRouter } from 'next/navigation';

import { Button } from '@/components/button';

import { Project } from '@/types/project';
import { ProjectCard } from '@/components/projectCard';

export function ProjectsSection({ id, someProjects }: { id: string, someProjects: Project[] }) {
  const router = useRouter()

  function handleGoToAllProjects() {
    router.push('/all-projects')
  }

  return (
    <nav id={ id } className='min-h-screen w-full flex flex-col justify-between items-center gap-12' >
      <div className='flex flex-col items-center justify-center' >
        <h1 className='text-4xl text-green font-bold' >
          Projects
        </h1>
        <p>
          Check out my projects, feel free to access the projects
        </p>
      </div>

      <section className='grid grid-cols-1 w-fit md:w-[85%] md:grid-cols-2 gap-4 group' >
        { someProjects.map( ( project, index ) => (
          <ProjectCard
            key={ `project-${ project.title }-${ index }` }
            { ...project }
          />
        ) ) }
      </section>

      <Button size='lg' className='w-fit' onClick={ handleGoToAllProjects } >
        See All Projects
      </Button>
    </nav>
  )
}