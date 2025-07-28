const email = process.env.NEXT_PUBLIC_USER_EMAIL

export function handleClickContactButton() {
  window.location.href = `mailto:${ email }?subject=Interessado em Contato&body=Olá, gostaria de entrar em contato.`;
}