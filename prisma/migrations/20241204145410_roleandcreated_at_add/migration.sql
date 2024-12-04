-- CreateEnum
CREATE TYPE "Role" AS ENUM ('Admin', 'Superadmin');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "role" "Role" NOT NULL DEFAULT 'Admin';
