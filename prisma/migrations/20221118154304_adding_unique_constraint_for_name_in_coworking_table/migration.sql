/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `coworkings` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "coworkings_name_key" ON "coworkings"("name");
