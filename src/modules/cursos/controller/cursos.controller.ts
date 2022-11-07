import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { CursosService } from '../service/cursos.service';
import { CriaCursoDto } from '../dto/cria-curso';
import { AtualizaCursoDto } from '../dto/atualiza-curso';

@Controller('cursos')
export class CursosController {
  constructor(private readonly cursosService: CursosService) {}

  @Post()
  async cria(@Body() dados: CriaCursoDto): Promise<any> {
    return this.cursosService.cria(dados);
  }

  @Get()
  async buscaTodos() {
    return this.cursosService.buscaTodos();
  }

  @Get('/:id') 
  async buscaPorId(@Param('id') id: string): Promise<any> {
    return this.cursosService.buscaPorId(id);
  }

  @Put('/:id')
  async atualiza(@Param('id') id: string, @Body() data: AtualizaCursoDto) {
    return this.cursosService.atualiza(id, data);
  }

  @Delete('/:id')
  async deleta(@Param('id') id: string) {
    return this.cursosService.deleta(id);
  }
}
