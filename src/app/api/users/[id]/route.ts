import { connectDb, prisma } from "@/libs/db";
import { NextResponse } from "next/server";

// get user by id
export const GET = async (req: Request, res: NextResponse) => {
  try {
    const id = Number(req.url.split("users/")[1]);
    await connectDb();
    const user = await prisma?.user.findFirst({ where: { id } });
    if (!user) return NextResponse.json({ message: "Not Found" }, { status: 404 });
    return NextResponse.json({ message: "Success", user }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
};

// update user by id
export const PUT = async (req: Request, res: NextResponse) => {
  try {
    const id = Number(req.url.split("users/")[1]);
    const { name, email, age } = await req.json();
    await connectDb();
    const user = await prisma.user.update({ data: { name, email, age }, where: { id } });
    if (!user) return NextResponse.json({ message: "Not Found" }, { status: 404 });
    return NextResponse.json({ message: "Success", user }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
};
// delete user by id
export const DELETE = async (req: Request, res: NextResponse) => {
  try {
    const id = Number(req.url.split("users/")[1]);
    await connectDb();
    const user = await prisma.user.delete({ where: { id } });
    if (!user) return NextResponse.json({ message: "Not Found" }, { status: 404 });
    return NextResponse.json({ message: "Success", user }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
};
