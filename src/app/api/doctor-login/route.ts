import { NextResponse } from "next/server";
import { Redis } from "@upstash/redis";

const redis = new Redis({
  url: process.env.KV_REST_API_URL,
  token: process.env.KV_REST_API_TOKEN,
});

interface DoctorLogin {
  email: string;
  password: string;
  rememberMe?: boolean;
  timestamp: string;
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as Omit<DoctorLogin, "timestamp">;

    const loginEntry: DoctorLogin = {
      ...body,
      timestamp: new Date().toISOString(),
    };

    // Store login entry in Redis (use email as key)
    await redis.set(`doctor:${body.email}`, JSON.stringify(loginEntry));

    return NextResponse.json({ success: true, message: "Login logged successfully" });
  } catch (err: unknown) {
  console.error("Error logging doctor login:", err);

  // Narrow the type before using 'message'
  const errorMessage =
    err instanceof Error ? err.message : "An unknown error occurred";

  return NextResponse.json({ success: false, error: errorMessage }, { status: 500 });
  }
}
