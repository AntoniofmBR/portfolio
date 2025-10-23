import { HomeSection } from '@/app/sections/homeSection';
import { AboutSection } from '@/app/sections/aboutSection';
import { ProjectsSection } from '@/app/sections/projectsSection';
import { ContactSection } from '@/app/sections/contactSection';

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

import { getSomeProjects } from '@/utils/getProjects';
import { ButtonSendMessage } from '@/components/sendMessageButton';

export default async function Home() {
  const someProjects = await getSomeProjects(4)

  return (
    <main className='flex flex-col w-full gap-12' >
      <Header newItem={ <ButtonSendMessage variant='primary' /> } />
      <HomeSection id='home' />
      <AboutSection id='about' />
      <ProjectsSection id='projects' someProjects={ someProjects } />
      <ContactSection id='contact' />
      <Footer />
    </main>
  );
}
