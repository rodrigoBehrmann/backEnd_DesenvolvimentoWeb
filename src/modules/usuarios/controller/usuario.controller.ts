import {
  Body,
  Controller,
  Get,
  Post,
  UseGuards,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AtualizaUsuarioDto } from '../dto/atualiza-usuario.dto';
import { CriaUsuarioDto } from '../dto/cria-usuario.dto';
import { UsuarioService } from '../service/usuario.service';


@Controller('usuarios')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  @Post()
  async cria(@Body() dados: CriaUsuarioDto): Promise<any> {
    return this.usuarioService.cria(dados);
  }

  @Get()
  async buscaTodos() {
    return this.usuarioService.buscaTodos();
  }

  @Get('/:id')
  async buscaPorId(@Param('id') id: string): Promise<any> {
    return this.usuarioService.buscaPorId(id);
  }

  @Put('/:id')
  async atualiza(@Param('id') id: string, @Body() data: AtualizaUsuarioDto) {
    return this.usuarioService.atualiza(id, data);
  }

  @Delete('/:id')
  async deleta(@Param('id') id: string) {
    return this.usuarioService.deleta(id);
  }
}
