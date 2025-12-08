-- CreateEnum
CREATE TYPE "LinkType" AS ENUM ('Button', 'Expanded');

-- CreateTable
CREATE TABLE "Icon" (
    "id" SERIAL NOT NULL,
    "type" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Icon_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LinkDataExpanded" (
    "linkId" INTEGER NOT NULL,

    CONSTRAINT "LinkDataExpanded_pkey" PRIMARY KEY ("linkId")
);

-- CreateTable
CREATE TABLE "LinkDataButton" (
    "linkId" INTEGER NOT NULL,
    "url" TEXT NOT NULL,

    CONSTRAINT "LinkDataButton_pkey" PRIMARY KEY ("linkId")
);

-- CreateTable
CREATE TABLE "Link" (
    "id" SERIAL NOT NULL,
    "type" "LinkType" NOT NULL,
    "title" TEXT NOT NULL,
    "isImportant" BOOLEAN NOT NULL,
    "iconId" INTEGER NOT NULL,
    "sessionId" INTEGER,
    "parentDataExpandedId" INTEGER,

    CONSTRAINT "Link_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Session" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Session_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Link_iconId_key" ON "Link"("iconId");

-- AddForeignKey
ALTER TABLE "LinkDataExpanded" ADD CONSTRAINT "LinkDataExpanded_linkId_fkey" FOREIGN KEY ("linkId") REFERENCES "Link"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LinkDataButton" ADD CONSTRAINT "LinkDataButton_linkId_fkey" FOREIGN KEY ("linkId") REFERENCES "Link"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Link" ADD CONSTRAINT "Link_iconId_fkey" FOREIGN KEY ("iconId") REFERENCES "Icon"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Link" ADD CONSTRAINT "Link_sessionId_fkey" FOREIGN KEY ("sessionId") REFERENCES "Session"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Link" ADD CONSTRAINT "Link_parentDataExpandedId_fkey" FOREIGN KEY ("parentDataExpandedId") REFERENCES "LinkDataExpanded"("linkId") ON DELETE SET NULL ON UPDATE CASCADE;
