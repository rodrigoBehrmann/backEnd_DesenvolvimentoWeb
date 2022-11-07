import { PartialType } from '@nestjs/mapped-types';
import { IsOptional, IsString } from 'class-validator';
import { CriaDisciplinaDto } from './cria-disciplina.dto';

export class AtualizaDisciplinaDto extends PartialType(CriaDisciplinaDto) {

    @IsOptional()
    @IsString()
        nome: string;

    @IsOptional()
    @IsString()
        carga_horaria: string  
      
}
