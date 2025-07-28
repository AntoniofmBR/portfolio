import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function getProjects() {
  const projects = await prisma.project.findMany({
    orderBy: {
      createdAt: 'asc',
    },
  });
  return projects;
}

export async function getSomeProjects( quantity: number ) {
  const projects = await prisma.project.findMany({
    orderBy: {
      createdAt: 'asc',
    },
    take: quantity,
  });
  return projects;
}