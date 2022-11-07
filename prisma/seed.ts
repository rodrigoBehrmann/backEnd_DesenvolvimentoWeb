import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main(){
    await prisma.usuario.create({
        data: {
            "nome": "Admin",
            "matricula": "202233094",
            "cpf": "0000000000",                   
            "alunoId": "001",                   
            "login": "admin",
            "senha": "admin"
        }
    })

    await prisma.curso.create({
        data: {
            "nome": "Admin",
            "codigo": "001"
        }
    })

    await prisma.disciplina.create({
        data: {
            "nome": "Admin",
            "carga_horaria": "60",
            "disciplinaId": "001"
        }
    })
}

main().catch(e => {
    console.log(e);
    process.exit(1);
}).finally(() =>{
    prisma.$disconnect();
})