import { Module } from '@nestjs/common';
import { DisciplinasService } from './service/disciplinas.service';
import { DisciplinasController } from './controller/disciplinas.controller';

@Module({
  controllers: [DisciplinasController],
  providers: [DisciplinasService]
})
export class DisciplinasModule {}
