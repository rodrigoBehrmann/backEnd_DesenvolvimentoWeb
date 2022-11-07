import { Module } from '@nestjs/common';
import { CursosService } from './service/cursos.service';
import { CursosController } from './controller/cursos.controller';
import { PrismaService } from 'src/plugins/database/services/prisma.service';

@Module({
  controllers: [CursosController],
  providers: [CursosService, PrismaService]
})
export class CursosModule {}
