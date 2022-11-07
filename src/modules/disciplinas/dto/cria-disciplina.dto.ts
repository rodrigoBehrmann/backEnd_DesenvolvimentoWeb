import { Curso } from "@prisma/client";
import { IsNotEmpty, IsString } from "class-validator";

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

      @IsNotEmpty({
        message: 'Informe o Curso',
      })
      @IsString()
      disciplina_id: Curso;  
}
