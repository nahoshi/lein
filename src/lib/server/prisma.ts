import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../../generated/prisma/client";

const connectionString = `${process.env.DATABASE_URL}`;

const adapter = new PrismaPg({ connectionString });
const prima = App.prisma || new PrismaClient({ adapter });

if (process.env.NODE_ENV !== "production") {
  App.prisma = prima;
}

export default prima;
