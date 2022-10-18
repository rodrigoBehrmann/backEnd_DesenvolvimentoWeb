import { IsNotEmpty, IsString, IsEmail } from 'class-validator';

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
  email: string;

  @IsNotEmpty({
    message: 'Informe o nível do Usuário',
  })
  @IsString()
  nivel: string;

  @IsNotEmpty({
    message: 'Informe a situação do Usuário',
  })
  @IsString()
  situacao: string;

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
