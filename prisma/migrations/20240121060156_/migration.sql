/*
  Warnings:

  - You are about to drop the column `chargeModelId` on the `Category` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `ChargeModel` table. All the data in the column will be lost.
  - Added the required column `categoryId` to the `ChargeModel` table without a default value. This is not possible if the table is not empty.
  - Added the required column `date` to the `ChargeModel` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `ChargeModel` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Category" DROP CONSTRAINT "Category_chargeModelId_fkey";

-- AlterTable
ALTER TABLE "Category" DROP COLUMN "chargeModelId";

-- AlterTable
ALTER TABLE "ChargeModel" DROP COLUMN "title",
ADD COLUMN     "categoryId" TEXT NOT NULL,
ADD COLUMN     "date" TEXT NOT NULL,
ADD COLUMN     "description" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "ChargeModel" ADD CONSTRAINT "ChargeModel_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
