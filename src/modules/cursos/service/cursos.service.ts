import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/plugins/database/services/prisma.service';
import { CriaCursoDto } from '../dto/cria-curso';
import { AtualizaCursoDto } from '../dto/atualiza-curso';

@Injectable()
export class CursosService {  
  constructor(private readonly prismaService: PrismaService) {}

  async cria(data: CriaCursoDto): Promise<any> {    

    const cursoExists = await this.prismaService.curso.findFirst({
      where: {
        nome: data.nome,
      },
    });

    if (cursoExists) {
      throw new ConflictException('Usuário já existe');
    }

    const curso = this.prismaService.curso.create({
      data,
    });

    return curso;
  }

  async buscaTodos() {
    return this.prismaService.curso.findMany();
  }  

  async buscaPorId(id: string) {
    const curso = await this.prismaService.curso.findUnique({
      where: {
        id,
      },
    });

    if (!curso) {
      throw new NotFoundException('Curso não encontrado!');
    }

    return curso;
  }

  async atualiza(id: string, data: AtualizaCursoDto) {
    const cursoExists = await this.prismaService.curso.findUnique({
      where: {
        id,
      },
    });

    if (!cursoExists) {
      throw new NotFoundException('Curso não existe');
    }   

    await this.prismaService.curso.update({
      data,
      where: {
        id,
      },
    });
  }

  async deleta(id: string) {
    const cursoExists = await this.prismaService.curso.findUnique({
      where: {
        id,
      },
    });

    if (!cursoExists) {
      throw new NotFoundException('Curso não existe!');
    }

    await this.prismaService.curso.delete({
      where: {
        id,
      },
    });
  }


}
