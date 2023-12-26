import { PrismaClient } from "@prisma/client";

const prismaClientSingleton = () => {
  return new PrismaClient();
};
declare global {
  var prisma: undefined | ReturnType<typeof prismaClientSingleton>;
}
const prisma = globalThis.prisma ?? prismaClientSingleton();
if (process.env.NODE_ENV !== "production") globalThis.prisma = prisma;

// database connection
async function connectDb() {
  try {
    await prisma.$connect();
  } catch (err) {
    return Error("Database Connection Unsuccessful!");
  }
}

export { prisma, connectDb };
