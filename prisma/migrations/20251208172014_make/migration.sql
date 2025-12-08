-- DropForeignKey
ALTER TABLE "Link" DROP CONSTRAINT "Link_iconId_fkey";

-- AlterTable
ALTER TABLE "Link" ALTER COLUMN "iconId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Link" ADD CONSTRAINT "Link_iconId_fkey" FOREIGN KEY ("iconId") REFERENCES "Icon"("id") ON DELETE SET NULL ON UPDATE CASCADE;
