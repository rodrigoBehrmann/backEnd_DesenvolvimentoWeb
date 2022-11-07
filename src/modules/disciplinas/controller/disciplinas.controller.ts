import { Controller, Get, Post, Body,Put, Param, Delete } from '@nestjs/common';
import { DisciplinasService } from '../service/disciplinas.service';
import { CriaDisciplinaDto } from '../dto/cria-disciplina.dto';
import { AtualizaDisciplinaDto } from '../dto/atualiza-disciplina.dto';

@Controller('disciplinas')
export class DisciplinasController {
  constructor(private readonly disciplinasService: DisciplinasService) {}

  @Post()
  async cria(@Body() dados: CriaDisciplinaDto): Promise<any> {
    return this.disciplinasService.cria(dados);
  }

  @Get()
  async buscaTodos() {
    return this.disciplinasService.buscaTodos();
  }

  @Get('/:id') 
  async buscaPorId(@Param('id') id: string): Promise<any> {
    return this.disciplinasService.buscaPorId(id);
  }

  @Put('/:id')
  async atualiza(@Param('id') id: string, @Body() data: AtualizaDisciplinaDto) {
    return this.disciplinasService.atualiza(id, data);
  }

  @Delete('/:id')
  async deleta(@Param('id') id: string) {
    return this.disciplinasService.deleta(id);
  }
}
