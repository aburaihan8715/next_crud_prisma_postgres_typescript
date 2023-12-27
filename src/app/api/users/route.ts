import { connectDb, prisma } from "@/libs/db";
import { NextResponse } from "next/server";

// create user
export const POST = async (req: Request, res: NextResponse) => {
  try {
    const { name, email, password } = await req.json();
    await connectDb();
    const user = await prisma.user.create({ data: { name, email, password } });
    return NextResponse.json({ message: "Success", user }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
};

// get all user
export const GET = async (req: Request, res: NextResponse) => {
  try {
    await connectDb();
    const users = await prisma.user.findMany();
    return NextResponse.json({ message: "Success", users }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
};
