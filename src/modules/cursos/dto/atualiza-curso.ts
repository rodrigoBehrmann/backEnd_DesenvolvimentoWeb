import { PartialType } from '@nestjs/mapped-types';
import { IsOptional, IsString } from 'class-validator';
import { CriaCursoDto } from './cria-curso';

export class AtualizaCursoDto extends PartialType(CriaCursoDto) {
   
  @IsOptional()
  @IsString()
  nome: string;

  @IsOptional()
  @IsString()
  codigo: string;

}
