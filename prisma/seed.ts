import { PrismaClient } from '@prisma/client';

import { projects } from '@/prisma/projects-data'; 

const prisma = new PrismaClient();

async function main() {
  console.log(`Iniciando o seeding...`);

  await prisma.project.deleteMany();
  console.log('Projetos antigos deletados.');

  for ( const p of projects ) {
    const project = await prisma.project.create({
      data: p,
    });
    console.log(`Projeto criado: ${project.title} (ID: ${project.id})`);
  }
  console.log(`Seeding finalizado.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });