import { GoogleGenerativeAI } from "@google/generative-ai";

export async function POST(req: Request) {
  try {
    const { prompt } = await req.json();

    if (!process.env.GEMINI_API_KEY) {
      return new Response(
        JSON.stringify({ error: "Missing GEMINI_API_KEY" }),
        { status: 500 }
      );
    }

    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash", // ✅ FIXED - removed "-001"
    });

    const result = await model.generateContent(prompt);

    const text = result.response.text();

    return Response.json({ text });

  } catch (error: any) {
    console.error("API ERROR:", error);

    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500 }
    );
  }
}