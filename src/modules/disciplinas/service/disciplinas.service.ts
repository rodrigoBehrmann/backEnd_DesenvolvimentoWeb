import { Injectable } from '@nestjs/common';
import { CriaDisciplinaDto } from '../dto/cria-disciplina.dto';
import { AtualizaDisciplinaDto } from '../dto/atualiza-disciplina.dto';

@Injectable()
export class DisciplinasService {
  create(createDisciplinaDto: CriaDisciplinaDto) {
    return 'This action adds a new disciplina';
  }

  findAll() {
    return `This action returns all disciplinas`;
  }

  findOne(id: number) {
    return `This action returns a #${id} disciplina`;
  }

  update(id: number, updateDisciplinaDto: AtualizaDisciplinaDto) {
    return `This action updates a #${id} disciplina`;
  }

  remove(id: number) {
    return `This action removes a #${id} disciplina`;
  }
}
