import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const body = await req.json();
    await prisma.post.create({
      data: {
        title: body.title,
        content: body.content,
      },
    });

    return new NextResponse("New post 🎉", { status: 200 });
  } catch {
    return new NextResponse("Internal server error", { status: 500 });
  }
}

export async function GET() {
  try {
    const posts = await prisma.post.findMany({});

    return NextResponse.json(posts);
  } catch {
    return new NextResponse("Internal server error wow", { status: 500 });
  }
}
