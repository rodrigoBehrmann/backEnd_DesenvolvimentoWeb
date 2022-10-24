import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { CursosService } from '../service/cursos.service';
import { CriaCursoDto } from '../dto/cria-curso';
import { AtualizaCursoDto } from '../dto/atualiza-curso';

@Controller('cursos')
export class CursosController {
  constructor(private readonly cursosService: CursosService) {}

  @Post()
 // @Roles(Role.ADMIN)
  //@UseGuards(AuthGuard(), RolesGuard)
  async cria(@Body() dados: CriaCursoDto): Promise<any> {
    return this.cursosService.cria(dados);
  }

  @Get()
  //@Roles(Role.ADMIN)
  //@UseGuards(AuthGuard(), RolesGuard)
  async buscaTodos() {
    return this.cursosService.buscaTodos();
  }

  @Get('/:id')
  //@UseGuards(AuthGuard())
  async buscaPorId(@Param('id') id: string): Promise<any> {
    return this.cursosService.buscaPorId(id);
  }

  @Put('/:id')
 // @UseGuards(AuthGuard())
  async atualiza(@Param('id') id: string, @Body() data: AtualizaCursoDto) {
    return this.cursosService.atualiza(id, data);
  }

  @Delete('/:id')
  //@Roles(Role.ADMIN)
  //@UseGuards(AuthGuard(), RolesGuard)
  async deleta(@Param('id') id: string) {
    return this.cursosService.deleta(id);
  }
}
