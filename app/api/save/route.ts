import { db } from "@/db/db";
import { AIOutput } from "@/db/schema";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { formData, aiResponse, templateSlug, createdBy } = await req.json();

    if (!formData || !templateSlug || !createdBy) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const result = await db.insert(AIOutput).values({
      formData: formData,
      aiResponse: aiResponse,
      templateSlug: templateSlug,
      createdBy: createdBy,
    });

    return NextResponse.json({ success: true, result });
  } catch (error) {
    console.error("SAVE API ERROR:", error);
    return NextResponse.json({ error: "Failed to save output" }, { status: 500 });
  }
}
