/*
  Warnings:

  - You are about to drop the column `ingedients` on the `Product` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Product" DROP COLUMN "ingedients",
ADD COLUMN     "ingredients" TEXT[];
