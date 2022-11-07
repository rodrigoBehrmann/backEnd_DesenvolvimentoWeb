import { Module } from '@nestjs/common';
import { UsuarioModule } from './modules/usuarios/usuario.module';
import { CursosModule } from './modules/cursos/cursos.module';
import { DisciplinasModule } from './modules/disciplinas/disciplinas.module';
import * as ConfigEnv from '@nestjs/config';

@Module({
  imports: [
    ConfigEnv.ConfigModule.forRoot({ isGlobal: true, envFilePath: '.env' }),
    UsuarioModule,
    CursosModule,
    DisciplinasModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
