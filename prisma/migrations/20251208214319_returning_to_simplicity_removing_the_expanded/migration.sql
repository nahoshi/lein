/*
  Warnings:

  - You are about to drop the column `isImportant` on the `Link` table. All the data in the column will be lost.
  - You are about to drop the column `parentDataExpandedId` on the `Link` table. All the data in the column will be lost.
  - You are about to drop the column `type` on the `Link` table. All the data in the column will be lost.
  - You are about to drop the `LinkDataButton` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `LinkDataExpanded` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `url` to the `Link` table without a default value. This is not possible if the table is not empty.
  - Made the column `sessionId` on table `Link` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Link" DROP CONSTRAINT "Link_parentDataExpandedId_fkey";

-- DropForeignKey
ALTER TABLE "Link" DROP CONSTRAINT "Link_sessionId_fkey";

-- DropForeignKey
ALTER TABLE "LinkDataButton" DROP CONSTRAINT "LinkDataButton_linkId_fkey";

-- DropForeignKey
ALTER TABLE "LinkDataExpanded" DROP CONSTRAINT "LinkDataExpanded_linkId_fkey";

-- AlterTable
ALTER TABLE "Link" DROP COLUMN "isImportant",
DROP COLUMN "parentDataExpandedId",
DROP COLUMN "type",
ADD COLUMN     "url" TEXT NOT NULL,
ALTER COLUMN "sessionId" SET NOT NULL;

-- DropTable
DROP TABLE "LinkDataButton";

-- DropTable
DROP TABLE "LinkDataExpanded";

-- DropEnum
DROP TYPE "LinkType";

-- AddForeignKey
ALTER TABLE "Link" ADD CONSTRAINT "Link_sessionId_fkey" FOREIGN KEY ("sessionId") REFERENCES "Session"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
