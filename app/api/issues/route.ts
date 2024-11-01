import { NextRequest, NextResponse } from "next/server";
import z from "zod";
import prisma from "@/prisma/client";

const createIssueSchema = z.object({
  title: z.string().min(1).max(255),
  description: z.string().min(1),
});

export function GET() {
  return NextResponse.json(
    { message: "Hiii , this is the api" },
    { status: 200 }
  );
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validationResult = createIssueSchema.safeParse(body);
  if (!validationResult.success) {
    return NextResponse.json(validationResult.error.errors, { status: 400 });
  }

  const newIssue = await prisma.issue.create({
    data: {
      title: body.title,
      description: body.description,
    },
  });

  return NextResponse.json(newIssue, { status: 200 });
}
