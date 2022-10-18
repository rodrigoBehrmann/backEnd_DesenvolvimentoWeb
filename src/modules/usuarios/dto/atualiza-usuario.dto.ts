import { IsOptional, IsString, IsEmail } from 'class-validator';

export class AtualizaUsuarioDto {
  @IsOptional()
  @IsString()
  nome: string;

  @IsOptional()
  @IsEmail()
  email: string;

  @IsOptional()
  @IsString()
  nivel: string;

  @IsOptional()
  @IsString()
  situacao: string;

  @IsOptional()
  @IsString()
  login: string;

  @IsOptional()
  @IsString()
  senha: string;
}
