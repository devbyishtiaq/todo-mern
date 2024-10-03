import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// prisma
//   .$connect()
//   .then(() => console.log("DB connected!"))
//   .catch((err: any) => console.error("DB connection error:", err));

export default prisma;
