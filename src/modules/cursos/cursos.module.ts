import { Module } from '@nestjs/common';
import { CursosService } from './service/cursos.service';
import { CursosController } from './controller/cursos.controller';

@Module({
  controllers: [CursosController],
  providers: [CursosService]
})
export class CursosModule {}
