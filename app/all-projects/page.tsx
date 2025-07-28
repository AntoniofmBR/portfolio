import { AllProjectsView } from '@/app/all-projects/allProjectsView';
import { getProjects } from '@/utils/getProjects';

export default async function AllProjectsPage() {
  const projects = await getProjects()
  return <AllProjectsView projects={ projects } />
}