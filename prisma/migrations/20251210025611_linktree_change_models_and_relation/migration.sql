/*
  Warnings:

  - You are about to drop the `Icon` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Link` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Session` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Link" DROP CONSTRAINT "Link_iconId_fkey";

-- DropForeignKey
ALTER TABLE "Link" DROP CONSTRAINT "Link_sessionId_fkey";

-- DropTable
DROP TABLE "Icon";

-- DropTable
DROP TABLE "Link";

-- DropTable
DROP TABLE "Session";

-- CreateTable
CREATE TABLE "LinkTreeIcon" (
    "id" SERIAL NOT NULL,
    "type" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "LinkTreeIcon_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LinkTreeItem" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "iconId" INTEGER,
    "sessionId" INTEGER NOT NULL,

    CONSTRAINT "LinkTreeItem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LinkTreeSession" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "LinkTreeSession_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "LinkTreeItem_iconId_key" ON "LinkTreeItem"("iconId");

-- AddForeignKey
ALTER TABLE "LinkTreeItem" ADD CONSTRAINT "LinkTreeItem_iconId_fkey" FOREIGN KEY ("iconId") REFERENCES "LinkTreeIcon"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LinkTreeItem" ADD CONSTRAINT "LinkTreeItem_sessionId_fkey" FOREIGN KEY ("sessionId") REFERENCES "LinkTreeSession"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
