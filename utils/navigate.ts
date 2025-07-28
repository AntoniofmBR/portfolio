import { useRouter } from 'next/navigation';

export function handleNavigate( local: string ) {
  const router = useRouter()
  router.push( local )
}
