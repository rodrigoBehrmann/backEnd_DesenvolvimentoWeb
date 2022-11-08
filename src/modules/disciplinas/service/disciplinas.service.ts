import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CriaDisciplinaDto } from '../dto/cria-disciplina.dto';
import { AtualizaDisciplinaDto } from '../dto/atualiza-disciplina.dto';
import { PrismaService } from 'src/plugins/database/services/prisma.service';

@Injectable()
export class DisciplinasService {
  constructor(private readonly prismaService: PrismaService) {}

  async cria(data: any): Promise<any> {    

    const disciplinaExists = await this.prismaService.disciplina.findFirst({
      where: {
        nome: data.nome,
      },
    });

    if (disciplinaExists) {
      throw new ConflictException('Disciplina já existe');
    }

    const disciplina = this.prismaService.disciplina.create({
      data,
    });

    return disciplina;
  }

  async buscaTodos() {
    return this.prismaService.disciplina.findMany();
  }  

  async buscaPorId(id: string) {
    const disciplina = await this.prismaService.disciplina.findUnique({
      where: {
        id,
      },
    });

    if (!disciplina) {
      throw new NotFoundException('Disciplina não encontrada!');
    }

    return disciplina;
  }

  async atualiza(id: string, data: any) {
    const disciplinaExists = await this.prismaService.disciplina.findUnique({
      where: {
        id,
      },
    });

    if (!disciplinaExists) {
      throw new NotFoundException('Disciplina não existe');
    }   

    await this.prismaService.disciplina.update({
      data,
      where: {
        id,
      },
    });
  }

  async deleta(id: string) {
    const disciplinaExists = await this.prismaService.disciplina.findUnique({
      where: {
        id,
      },
    });

    if (!disciplinaExists) {
      throw new NotFoundException('Disciplina não existe!');
    }

    await this.prismaService.disciplina.delete({
      where: {
        id,
      },
    });
  }

}
