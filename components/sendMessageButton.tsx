'use client'

import { Button } from './button'

interface ButtonSendMessageProps {
  className?: string
  variant: 'primary' | 'outline' | undefined
}

export function ButtonSendMessage({ className, variant }: ButtonSendMessageProps ) {
  const email = process.env.NEXT_PUBLIC_USER_EMAIL

  function handleClickContactButton() {
    window.location.href = `mailto:${ email }?subject=Interessado em Contato&body=Olá, gostaria de entrar em contato.`;
  }
  return (
    <Button
      className={ className }
      variant={ variant }
      onClick={ handleClickContactButton }
    >
      Send Message
    </Button>
  )
}
