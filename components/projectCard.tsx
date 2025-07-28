import { motion } from 'framer-motion';

import { Button } from '@/components/button';
import { Project } from '@/types/project';

export function ProjectCard({
  title,
  description,
  tags,
  src,
  alt,
  url,
}: Project ) {
  function handleNavigateToProject( link: string ) {
    window.open(link, '_blank', 'noopener,noreferrer')
  }

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className='flex flex-col items-center mb-12 md:mb-0 md:items-start gap-5 md:gap-3 w-full px-3 py-2'
    >
      <img
        src={ src }
        alt={ alt }
        className='h-64 w-full rounded-t-lg'
      />

      <h3 className='text-3xl font-bold' >
        { title }
      </h3>

      <p className='text-xl text-white line-clamp-2' >
        { description }
      </p>

      <div className='flex gap-2' >
        { tags.map( ( tag ) => (
          <div
            key={ `tag-${ tag }` }
            className='text-xs md:text-sm py-0.5 px-2 text-green border border-green rounded-lg hover:scale-105 transition-all'
          >
            { tag }
          </div>
        )) }
      </div>

      <Button
        size='sm'
        className='w-fit h-7 flex items-center justify-center'
        onClick={ () => handleNavigateToProject( url ) }
      >
        <p className='text-black' >
          See Project
        </p>
      </Button>
    </motion.div>
  )
}