import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const body = await req.json();
    await prisma.user.create({
      data: {
        username: body.username,
        password: body.password,
      },
    });

    return new NextResponse("Succesfully signed up", { status: 200 });
  } catch {
    return new NextResponse("Internal server error", { status: 500 });
  }
}
