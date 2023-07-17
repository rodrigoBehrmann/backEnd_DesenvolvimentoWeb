import { CursosController } from './cursos.controller';
import { CursosService } from '../service/cursos.service';
import { Curso } from '@prisma/client';
import { PrismaService } from 'src/plugins/database/services/prisma.service';

describe('CursosController', () => {
  let cursosController: CursosController;
  let cursosService: CursosService;
  let prismaService: PrismaService;

  beforeEach(() => {
    prismaService = new PrismaService();
    cursosService = new CursosService(prismaService);
    cursosController = new CursosController(cursosService);
  });

  describe('buscaTodos', () => {
    it('should return an array of courses', async () => {
      const result: Curso[] = [
        {
          id: 'aaa345ge52f34aaa',
          nome: 'Computacao',
          codigo: '001',
        },
      ];
      jest.spyOn(cursosService, 'buscaTodos').mockResolvedValue(result);
      const response = await cursosController.buscaTodos();

      expect(response).toEqual(result);
    });
  });
});
