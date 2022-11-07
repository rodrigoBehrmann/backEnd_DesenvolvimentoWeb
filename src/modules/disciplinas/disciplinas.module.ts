import { Module } from '@nestjs/common';
import { DisciplinasService } from './service/disciplinas.service';
import { DisciplinasController } from './controller/disciplinas.controller';
import { PrismaService } from 'src/plugins/database/services/prisma.service';

@Module({
  controllers: [DisciplinasController],
  providers: [DisciplinasService, PrismaService]
})
export class DisciplinasModule {}
