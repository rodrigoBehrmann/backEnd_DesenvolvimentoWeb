import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function getCursoId(): Promise<string | null> {
  const curso = await prisma.curso.findFirst({
    where: {
      codigo: '001',
    },
    select: {
      id: true,
    },
  });

  return curso.id;
}

async function CriaCurso() {
  await prisma.curso.create({
    data: {
      nome: 'Computacao',
      codigo: '001',
    },
  });
}

async function CriaDisciplina(codigo: string) {
  await prisma.disciplina.create({
    data: {
      nome: 'Admin',
      carga_horaria: '60',
      disciplinaId: codigo,
    },
  });
}
async function CriaUsuario(codigo: string) {
  await prisma.usuario.create({
    data: {
      nome: 'Admin',
      matricula: '202233094',
      cpf: '0000000000',
      alunoId: codigo,
      login: 'admin',
      senha: 'admin',
    },
  });
}

async function main() {
  await CriaCurso();
  const codigo = await getCursoId();
  await CriaDisciplina(codigo);
  await CriaUsuario(codigo);
}

main()
  .catch((e) => {
    console.log(e);
    process.exit(1);
  })
  .finally(() => {
    prisma.$disconnect();
  });
