/*
  Warnings:

  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the `Post` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[id]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "Post" DROP CONSTRAINT "Post_authorId_fkey";

-- AlterTable
ALTER TABLE "User" DROP CONSTRAINT "User_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "User_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "User_id_seq";

-- DropTable
DROP TABLE "Post";

-- CreateTable
CREATE TABLE "YearModel" (
    "id" TEXT NOT NULL,
    "year" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "YearModel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MonthModel" (
    "id" TEXT NOT NULL,
    "month" TEXT NOT NULL,
    "yearModelId" TEXT NOT NULL,

    CONSTRAINT "MonthModel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ChargeModel" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "price" TEXT NOT NULL,
    "monthModelId" TEXT NOT NULL,

    CONSTRAINT "ChargeModel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Category" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "chargeModelId" TEXT NOT NULL,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "YearModel_year_key" ON "YearModel"("year");

-- CreateIndex
CREATE UNIQUE INDEX "User_id_key" ON "User"("id");

-- AddForeignKey
ALTER TABLE "YearModel" ADD CONSTRAINT "YearModel_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MonthModel" ADD CONSTRAINT "MonthModel_yearModelId_fkey" FOREIGN KEY ("yearModelId") REFERENCES "YearModel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ChargeModel" ADD CONSTRAINT "ChargeModel_monthModelId_fkey" FOREIGN KEY ("monthModelId") REFERENCES "MonthModel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Category" ADD CONSTRAINT "Category_chargeModelId_fkey" FOREIGN KEY ("chargeModelId") REFERENCES "ChargeModel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
