import { Curso} from "@prisma/client";
import { IsNotEmpty, IsOptional, IsString, IsUUID } from "class-validator";

export class CriaDisciplinaDto {

    @IsNotEmpty({
        message: 'Informe o Nome',
      })
      @IsString()
      nome: string;

      @IsNotEmpty({
        message: 'Informe a Carga Horaria',
      })
      @IsString()
      carga_horaria: string;  

      @IsOptional()
      @IsUUID()      
      disciplinaId: Curso;  
}
