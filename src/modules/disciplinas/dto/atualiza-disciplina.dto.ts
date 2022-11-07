import { PartialType } from '@nestjs/mapped-types';
import { CriaDisciplinaDto } from './cria-disciplina.dto';

export class AtualizaDisciplinaDto extends PartialType(CriaDisciplinaDto) {}
