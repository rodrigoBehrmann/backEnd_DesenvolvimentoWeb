import { IsNotEmpty, IsString } from "class-validator";

export class CriaCursoDto {

    @IsNotEmpty({
        message: 'Informe o Nome',
      })
      @IsString()
      nome: string;

      @IsNotEmpty({
        message: 'Informe o Codigo',
      })
      @IsString()
      codigo: string;      
}
