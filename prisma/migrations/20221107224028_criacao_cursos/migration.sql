/*
  Warnings:

  - You are about to drop the column `email` on the `usuarios` table. All the data in the column will be lost.
  - You are about to drop the column `nivel` on the `usuarios` table. All the data in the column will be lost.
  - You are about to drop the column `situacao` on the `usuarios` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[matricula]` on the table `usuarios` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `alunoId` to the `usuarios` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cpf` to the `usuarios` table without a default value. This is not possible if the table is not empty.
  - Added the required column `matricula` to the `usuarios` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "usuarios_email_key";

-- AlterTable
ALTER TABLE "usuarios" DROP COLUMN "email",
DROP COLUMN "nivel",
DROP COLUMN "situacao",
ADD COLUMN     "alunoId" TEXT NOT NULL,
ADD COLUMN     "cpf" TEXT NOT NULL,
ADD COLUMN     "matricula" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "cursos" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "codigo" TEXT NOT NULL,

    CONSTRAINT "cursos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "disciplinas" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "carga_horaria" TEXT NOT NULL,
    "disciplinaId" TEXT NOT NULL,

    CONSTRAINT "disciplinas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "resultados" (
    "id" TEXT NOT NULL,
    "nota" TEXT NOT NULL,
    "resultado" TEXT NOT NULL,

    CONSTRAINT "resultados_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "usuarios_matricula_key" ON "usuarios"("matricula");

-- AddForeignKey
ALTER TABLE "usuarios" ADD CONSTRAINT "usuarios_alunoId_fkey" FOREIGN KEY ("alunoId") REFERENCES "cursos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "disciplinas" ADD CONSTRAINT "disciplinas_disciplinaId_fkey" FOREIGN KEY ("disciplinaId") REFERENCES "cursos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
