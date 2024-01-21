/*
  Warnings:

  - You are about to drop the column `monthModelId` on the `ChargeModel` table. All the data in the column will be lost.
  - You are about to drop the `MonthModel` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `YearModel` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "ChargeModel" DROP CONSTRAINT "ChargeModel_monthModelId_fkey";

-- DropForeignKey
ALTER TABLE "MonthModel" DROP CONSTRAINT "MonthModel_yearModelId_fkey";

-- DropForeignKey
ALTER TABLE "YearModel" DROP CONSTRAINT "YearModel_userId_fkey";

-- DropIndex
DROP INDEX "User_id_key";

-- AlterTable
ALTER TABLE "ChargeModel" DROP COLUMN "monthModelId",
ADD COLUMN     "userId" TEXT;

-- DropTable
DROP TABLE "MonthModel";

-- DropTable
DROP TABLE "YearModel";

-- AddForeignKey
ALTER TABLE "ChargeModel" ADD CONSTRAINT "ChargeModel_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
