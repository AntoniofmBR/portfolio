import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();
const SECRET_TOKEN = process.env.ADMIN_SECRET_TOKEN;

export async function POST(request: Request) {
  const { title, description, tags, src, alt, url, token } = await request.json();

  if ( token !== SECRET_TOKEN ) {
    return NextResponse.json({ error: 'Não autorizado' }, { status: 401 });
  }

  if ( !title || !description || !tags || !src || !alt || !url ) {
    return NextResponse.json({ error: 'Todos os campos são obrigatórios' }, { status: 400 });
  }

  try {
    const newProject = await prisma.project.create({
      data: { title, description, tags, src, alt, url },
    });
    return NextResponse.json(newProject, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Erro ao criar o projeto' }, { status: 500 });
  }
}