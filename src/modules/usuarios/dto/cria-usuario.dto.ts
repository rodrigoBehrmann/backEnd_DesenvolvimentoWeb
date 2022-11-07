import { Curso } from '@prisma/client';
import { IsNotEmpty, IsString, IsEmail, IsOptional, isString } from 'class-validator';

export class CriaUsuarioDto {
  @IsNotEmpty({
    message: 'Informe o Nome',
  })
  @IsString()
  nome: string;

  @IsNotEmpty({
    message: 'Informe o Email',
  })
  @IsEmail()
  matricula: string;

  @IsNotEmpty({
    message: 'Informe o nível do Usuário',
  })
  @IsString()
  cpf: string; 
  
  @IsOptional()
  @IsString()
  alunoId: Curso;

  @IsNotEmpty({
    message: 'Informe o Login',
  })
  @IsString()
  login: string;

  @IsNotEmpty({
    message: 'Informe a Senha',
  })
  @IsString()
  senha: string;
}
