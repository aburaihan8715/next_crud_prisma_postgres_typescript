import { users } from "@/data/data";
import { connectDb, prisma } from "@/libs/db";
import { NextResponse } from "next/server";

// get all user
export const GET = async (req: Request, res: NextResponse) => {
  try {
    await connectDb();
    await prisma.user.deleteMany();
    await prisma.user.createMany({ data: users, skipDuplicates: true });
    const allUsers = await prisma.user.findMany();
    return NextResponse.json({ message: "Success", allUsers }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
};
