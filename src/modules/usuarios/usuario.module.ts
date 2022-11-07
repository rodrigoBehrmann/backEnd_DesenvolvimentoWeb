import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/plugins/database/database.module';
import { UsuarioService } from './service/usuario.service';
import { UsuarioController } from './controller/usuario.controller';
import { PassportModule } from '@nestjs/passport';
import { PrismaService } from 'src/plugins/database/services/prisma.service';

@Module({
  exports: [UsuarioService],
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    DatabaseModule,
  ],
  controllers: [UsuarioController],
  providers: [UsuarioService, PrismaService],
})
export class UsuarioModule {}
