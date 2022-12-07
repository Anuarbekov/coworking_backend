/*
  Warnings:

  - Added the required column `is_passed` to the `events` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "events" ADD COLUMN     "is_passed" BOOLEAN NOT NULL;
